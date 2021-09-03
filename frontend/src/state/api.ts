import axios from "axios";
import { createServer, Model } from "miragejs";

const ROOT_STATE = {
  notes: [
    {
      id: "1",
      title: "Title 1",
      text: "Text 1 - Est libero a lorem curabitur auctor at viverra ipsum id euismod condimentum dolor vel sit nullam libero nec",
    },
    { id: "2", title: "Title 2", text: "Text 2 - Auctor dolor vitae nullam" },
    {
      id: "3",
      title: "Title 3",
      text: "Text 3 - Viverra nunc enim adipiscing lorem laoreet id nec condimentum est odio dolor sagittis in libero nullam ipsum",
    },
  ],
  users: [
    {
      id: "1",
      name: "Jeff Bezos",
    },
    {
      id: "2",
      name: "Bill Gates",
    },
    {
      id: "3",
      name: "Tim Cook",
    },
  ],
};

createServer({
  models: {
    notes: Model,
  },
  routes() {
    this.get("/notes", () => ROOT_STATE.notes);
  },
});

export default axios;
// @ts-ignore
window.axios = axios;
