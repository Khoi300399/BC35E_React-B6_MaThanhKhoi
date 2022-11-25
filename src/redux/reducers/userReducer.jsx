const arr = [];

export const arrUser = (state = arr, action) => {
  switch (action.type) {
    case "ADD_USER": {
      state = action.payload;
      console.log(state);
      return state;
    }
    default:
      return state;
  }
};
