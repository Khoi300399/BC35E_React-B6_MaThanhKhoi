/* eslint-disable no-fallthrough */
const stateDefault = {
  arrUser: [],

  editUser: {
    id: "",
    name: "",
    phone: "",
    email: "",
  },
};

export const userReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "ADD_USER": {
      let newState = { ...state };
      newState.arrUser = action.payload;
      return { ...newState };
    }

    case "DELETE_USER": {
      let arrUser = [...state.arrUser];
      arrUser = action.payload;
      return { ...state, arrUser };
    }

    case "EDIT_USER": {
      let newState = { ...state };
      newState.editUser = action.payload;
      return { ...newState };
    }

    case "UPDATE_USER": {
      let arrUser = [...state.arrUser];
      console.log(state, "arrUser old", arrUser);
      let index = arrUser.findIndex((user) => user.id === action.payload.id);
      console.log({ index });
      if (index !== -1) {
        arrUser.splice(index, 1, action.payload);
        console.log(arrUser);
      }

      return {
        editUser: {
          id: "",
          name: "",
          phone: "",
          email: "",
        },
        arrUser,
      };
    }

    default:
      return state;
  }
};
