const arr = [];

let editUser = {};

export const arrUser = (state = arr, action) => {
  switch (action.type) {
    case "ADD_USER": {
      state = action.payload;
      return state;
    }

    case "DELETE_USER": {
      state = action.payload;
      return state;
    }
    default:
      return state;
  }
};
