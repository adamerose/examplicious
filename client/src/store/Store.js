import { flow, types } from "mobx-state-tree";
import api from "src/api";
import history from "src/history";

const UserInfo = types.model("UserInfo", {
  id: types.integer,
  username: types.string,
  email: types.maybeNull(types.string),
});

const Article = types.model("Article", {
  title: types.optional(types.string, ""),
  body: types.optional(types.string, ""),
});

const Store = types
  .model("Store", {
    articles: types.array(Article),
    userInfo: types.maybe(UserInfo),
    jwt: types.maybe(types.string),
    loading: types.optional(types.boolean, false),
  })
  .actions((self) => {
    return {
      fetchArticles: flow(function* fetchArticles() {
        const response = yield api.get("/articles");
        self.articles = response.data;
      }),

      postArticle: flow(function* postArticle(title, body) {
        console.log(title, body);
        const data = { title, body };
        yield api.post("/articles", data);
        yield self.fetchArticles();

        history.push("/");
      }),
      register: flow(function* register(username, password, email) {
        const user = (yield api.post("/users", {
          username,
          password,
          email,
        })).data;

        yield self.signIn(username, password, true);
        history.push("/");
      }),
      signIn: flow(function* signIn(username, password, remember) {
        const token = (yield api.post("/sign-in", { username, password })).data;
        if (remember) {
          localStorage.setItem("jwt", token);
        }
        self.jwt = token;
        api.defaults.headers.common = { Authorization: `bearer ${token}` };
        self.userInfo = (yield api.get("/users/me")).data;
        history.push("/create ");
      }),
      signOut: flow(function* signOut() {
        self.jwt = undefined;
        self.userInfo = undefined;
        localStorage.removeItem("jwt");
        history.push("/sign-in");
      }),
      restoreSession: flow(function* restoreSession() {
        const token = localStorage.getItem("jwt");

        if (token != undefined) {
          self.jwt = token;
          api.defaults.headers.common = { Authorization: `bearer ${token}` };
          self.userInfo = (yield api.get("/users/me")).data;
        }
      }),

      // Hooks
      afterCreate() {
        self.restoreSession();
        self.fetchArticles();
      },

      test: flow(function* test() {
        console.log("test");
      }),
    };
  })
  .views((self) => ({
    get todosCount() {
      return self.todos.length;
    },
    get isAuthenticated() {
      return self.userInfo != undefined;
    },
  }));

export default Store;
