export const order = {
  initialState: {},
  reducers: {
    setOrder: (state, payload) => ({ ...state, ...payload }),
    resetOrder: _ => ({})
  }
};
