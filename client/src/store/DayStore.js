import { flow, types } from "mobx-state-tree";

const DayStore = types.model("DayStore", {
  articles: types.array(Article),
  userInfo: types.maybe(UserInfo),
  jwt: types.maybe(types.string),
  loading: types.optional(types.boolean, false),
  darkTheme: types.optional(types.boolean, true),
});

const RootStore = types.model("RootStore", {
  dayStore: DayStore,
  articles: types.array(Article),
  userInfo: types.maybe(UserInfo),
  jwt: types.maybe(types.string),
  loading: types.optional(types.boolean, false),
  darkTheme: types.optional(types.boolean, true),
});
export default RootStore;
