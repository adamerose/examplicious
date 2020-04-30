import { observer } from "mobx-react-lite";
import React, { useContext, useState, useEffect } from "react";
import { store } from "../store";
import ReactJson from "react-json-view";
import "./App.css";

const AddTodoForm = () => {
  const [text, setText] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        store.addTodo(text);
        setText("");
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button disabled={!text} type="submit">
        Add
      </button>
    </form>
  );
};

const TodoView = observer(({ todo }) => (
  <div className={todo.done ? "todo todo-done" : "todo"} key={todo.title}>
    <button onClick={todo.remove}>❌</button>
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onClick={todo.toggle}
        readOnly
      />
      {todo.title}
    </label>
  </div>
));

export const App = observer(() => {
  return (
    <div id="app">
      <h1>Todos</h1>
      <h4>Completed: {store.completedTodosCount}</h4>
      <h4>Unompleted: {store.uncompletedTodosCount}</h4>
      <div className="todo-container">
        {store.todos.map((todo) => (
          <TodoView key={todo.title} todo={todo} />
        ))}
      </div>

      <AddTodoForm />
      <button onClick={store.saveTodos}>Save To Server</button>
      <button
        disabled={!store.undoManager.canUndo}
        onClick={store.undoManager.undo}
      >
        undo
      </button>
      <button
        disabled={!store.undoManager.canRedo}
        onClick={store.undoManager.redo}
      >
        redo
      </button>

      <br />
      <br />
      <hr />
      <div id="undo-panel" style={{ border: "1px solid black" }}>
        <div>undoLevels: {store.undoManager.undoLevels}</div>
        <div>redoLevels: {store.undoManager.redoLevels}</div>
        <div>canUndo: {store.undoManager.canUndo.toString()}</div>
        <div>canRedo: {store.undoManager.canRedo.toString()}</div>
        <ReactJson
          src={JSON.parse(JSON.stringify(store.undoManager))}
          displayObjectSize={false}
          displayDataTypes={false}
        />
      </div>
    </div>
  );
});

export default App;
