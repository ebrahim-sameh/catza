const initState = {
  sidebar: false,
  user: true,
};

const generalReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SIDEBAR":
      return { ...state, sidebar: payload };
    case "USER":
      return { ...state, user: payload };
    default:
      return state;
  }
};

export default generalReducer;
