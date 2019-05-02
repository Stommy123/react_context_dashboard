export const profile = {
  initialState: {
    firstName: "Harry",
    lastName: "Potter"
  },
  reducers: {
    setProfile: (state, { firstName, lastName }) => ({
      ...state,
      firstName,
      lastName
    })
  }
};
