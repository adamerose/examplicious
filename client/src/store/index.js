import { addMiddleware, getPath } from "mobx-state-tree";
import RootStore from "./RootStore";
import actionLogger from "./actionLogger";

const store = RootStore.create();
addMiddleware(store, actionLogger);
window.store = store;
export default store;
