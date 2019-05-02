export const route = {
  initialState: {
    active: window.location.pathname.split('/')[1] || 'dashboard'
  },
  reducers: {
    setActive: (state, { active }) => {
      window.history.pushState(String(), active, active);
      return {
        ...state,
        active
      };
    }
  }
};
