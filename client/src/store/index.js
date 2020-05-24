import { addMiddleware, getPath } from "mobx-state-tree";
import Store from "./Store";

const store = Store.create();

// Based on actionLogger from mst-middlewares
export function loggerMiddlware(call, next) {
  console.log(
    `[MST] #${call.rootId} ${call.type} - ${getPath(call.context)}/${call.name}`
  );
  next(call);
}

addMiddleware(store, loggerMiddlware);

window.store = store;

export { store };
export default store;
