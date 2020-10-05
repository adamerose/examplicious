// Logs all mobx actions and flows.
// https://github.com/mobxjs/mobx-state-tree/tree/master/packages/mst-middlewares#action-logger

import { getPath } from "mobx-state-tree";

function actionLogger(call, next) {
  console.log(`[MST] #${call.rootId} ${call.type} - ${getPath(call.context)}/${call.name}`);
  next(call);
}

export default actionLogger;
