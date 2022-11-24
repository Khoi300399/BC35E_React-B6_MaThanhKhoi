const arr = [
  {
    id: 1,
    name: "userA",
    phone: "123456789",
    email: "khoimtk321@gmail.com",
  },
];

const value = {
  id: 1,
  name: "userA",
  phone: "012345678",
  email: "khoimtk321@gmail.com",
};

const error = {
  id: "",
  name: "",
  phone: "",
  email: "",
};

export const arrUser = (state = arr, action) => {
  //   switch (action.type) {
  //     case "ADD-USER": {
  //       return state;
  //     }
  //     default:
  //       return state;
  //   }
};

export const values = (state = value, action) => {
  return { ...state };
};

export const errors = (state = error, action) => {
  //   switch (action.type) {
  //     case "ADD-USER": {
  //       return state;
  //     }
  //     default:
  //       return state;
  //   }
};

export const valid = (state = false, action) => {
  //   switch (action.type) {
  //     case "VALID": {
  //       state = action.payload;
  //       return state;
  //     }
  //     default:
  //       return state;
  //   }
};
