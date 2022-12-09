let inetialState = {
  session: false,
  codeSent: false,
  confirmation: null,
};
const reducer = (state = inetialState, action) => {
  switch (action.type) {
    case "update": {
      return { ...state, session: true };
    }

    case "codeSent": {
      return { ...state, codeSent: true, confirmation: action.confirmation };
    }
    default:
      return state;
  }
};

export default reducer;
