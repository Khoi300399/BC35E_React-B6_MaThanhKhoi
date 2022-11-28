/* eslint-disable no-fallthrough */
const stateDefault = {
  arrUser: [
    {
      id: "111",
      name: "abc",
      phone: "0000",
      email: "hoa@gm.co",
    },
  ],

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
    }

    case "DELETE_USER": {
      let newState = { ...state };
      newState.arrUser = action.payload;
      return { ...newState };
    }

    case "EDIT_USER": {
      let newState = { ...state };
      newState.editUser = action.payload;
      return { ...newState };
    }

    case "UPDATE_USER": {
      let newState = { ...state };
      let { arrUser } = newState;
      let index = arrUser.findIndex((user) => user.id === action.payload.id);
      arrUser[index] = { ...action.payload };
      arrUser.splice(index, 1);
      console.log(arrUser);
      return { ...newState };
    }

    default:
      return state;
  }
};
