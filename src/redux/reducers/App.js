let inetialState = {
  debug: true,
  loaded: false,
};
const reducer = (state = inetialState, action) => {
  switch (action.type) {
    case "APP_STATE":
      return { ...state, ...action.state };

    case "update":
      return { ...state, loaded: true };
    default:
      return state;
  }
};

export default reducer;
