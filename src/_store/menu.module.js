export const menu = {
  namespaced: true,
  state: {
    selectedNavItem: null,
    drawer: null
  },
  actions: {
    navigate({ dispatch, commit }, data) {
      commit("mutationNavigate", data)
    }
  },
  mutations: {
    mutationNavigate(state, data){
      state.selectedNavItem = data;
    }
  },
  getters: {}

}
