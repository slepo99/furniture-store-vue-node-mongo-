
export const headerModule = {
    strict: true,
    state: function () {
      return {
        isOpen: false
      };
    },
    mutations: {
        changeStatus(state) {
            return state.isOpen = !state.isOpen
        }
    },
      namespaced: true,
  };