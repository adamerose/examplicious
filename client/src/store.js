import { createContext } from "react";
import {
  types,
  onSnapshot,
  getSnapshot,
  applySnapshot,
  getParent,
  destroy,
  flow,
  addMiddleware,
  getPath,
} from "mobx-state-tree";
import { UndoManager, actionLogger } from "mst-middlewares";
import api from "api";

// Set up UndoManager
export let undoManager = {};
export const setUndoManager = (targetStore) => {
  undoManager = targetStore.history;
};

console.log("process.env", process.env);

const Todo = types
  .model("Todo", {
    title: types.string,
    done: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    toggle() {
      self.done = !self.done;
    },
    remove() {
      getParent(self, 2).removeTodo(self);
    },
  }));

const Store = types
  .model("Store", {
    todos: types.array(Todo),
    history: types.optional(UndoManager, {}),
  })
  .actions((self) => {
    setUndoManager(self);

    return {
      fetchTodos: flow(function* fetchTodos() {
        try {
          const response = yield api.get("/todos");
          self.undoManager.withoutUndo(() => {
            // self.todos = response.data;
            applySnapshot(self, { todos: response.data });
          });
        } catch (e) {
          alert("Failed to fetch todo data." + e);
        }
      }),

      saveTodos: flow(function* saveTodos() {
        try {
          const data = getSnapshot(self).todos;
          const response = yield api.put("/todos", data);
        } catch (e) {
          alert("Failed to save todos." + e);
        }
      }),

      addTodo(title) {
        self.todos.push({
          title,
        });
      },
      removeTodo(todo) {
        destroy(todo);
      },

      // Hooks
      afterCreate() {
        self.fetchTodos();
      },
    };
  })
  .views((self) => ({
    get todosCount() {
      return self.todos.length;
    },
    get completedTodosCount() {
      return self.todos.filter((t) => t.done).length;
    },
    get uncompletedTodosCount() {
      return self.todos.filter((t) => !t.done).length;
    },
    get undoManager() {
      return undoManager;
    },
  }));

export const store = Store.create();

export function callLogger(call, next) {
  console.log(
    `[MST] #${call.rootId} ${call.type} - ${getPath(call.context)}/${call.name}`
  );
  next(call);
}

// addMiddleware(store, actionLogger);
addMiddleware(store, callLogger);

window.store = store;
window.getSnapshot = getSnapshot;
export const StoreContext = createContext(store);
