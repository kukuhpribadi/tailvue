import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      sidebarActive: false,
    };
  },
  mutations: {
    changeSidebarMenu(state) {
      state.sidebarActive = !state.sidebarActive;
    },
  },
});
