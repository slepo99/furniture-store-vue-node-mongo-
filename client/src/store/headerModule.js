
export const headerModule = {
    strict: true,
    state: function () {
      return {
        isOpen: false
      };
    },
    getters: {
      openSearchFieldToStore(state) {
        state.isOpen = true
      }
    },
    mutations: {
        changeStatus(state) {
            return state.isOpen = !state.isOpen
        }
    },
      namespaced: true,
  };