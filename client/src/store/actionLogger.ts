// Logs all mobx actions and flows.
// https://github.com/mobxjs/mobx-state-tree/tree/master/packages/mst-middlewares#action-logger

import { IMiddlewareEvent, getPath } from "mobx-state-tree";

function actionLogger(call: IMiddlewareEvent, next: (call: IMiddlewareEvent) => void) {
  console.log(`[MST] #${call.rootId} ${call.type} - ${getPath(call.context)}/${call.name}`);
  next(call);
}

export default actionLogger;
