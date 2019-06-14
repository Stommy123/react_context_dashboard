export const snackBar = {
  initialState: {
    message: String(),
    remove: false
  },
  reducers: {
    setMessage: (state, { message }) => ({
      ...state,
      message
    }),
    setRemove: (state, { remove }) => ({
      ...state,
      remove,
      ...(remove ? {} : { message: String() })
    })
  }
};
