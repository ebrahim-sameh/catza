const initState = {
  sidebar: true,
  user: false,
  isUser: "",
};

const generalReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SIDEBAR":
      return { ...state, sidebar: payload };
    case "USER":
      return { ...state, user: payload };
    case "IS_USER":
      return { ...state, isUser: payload };
    default:
      return state;
  }
};

export default generalReducer;
