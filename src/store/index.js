import { createStore } from "vuex";

export default createStore({
  state: {
    api: [
      {
        id: 1,
        url: "http://192.168.12.147:21465",
        token: "managercas2018",
        session: "teste5",
      },
      {
        id: 2,
        url: "http://192.168.12.147:21466",
        token: "managercas2018",
        session: "teste6",
      },
    ],
  },
  getters: {},
  mutations: {
    setApi(state, api) {
      state.api.push(api);
    },
    removeServer(state, id) {
      state.api.splice(id, 1);
    },
  },
  actions: {},
  modules: {},
});
