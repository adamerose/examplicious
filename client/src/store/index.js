import { addMiddleware } from "mobx-state-tree";
import RootStore from "./RootStore";
import actionLogger from "./actionLogger";

const store = RootStore.create();
addMiddleware(store, actionLogger);

export default store;

window.store = store;

