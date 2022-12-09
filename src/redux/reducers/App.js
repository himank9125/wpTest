let inetialState = {
  debug: true,
  loaded: false,
  session: false,
  codeSent: false,
  confirmation: null,
};
const reducer = (state = inetialState, action) => {
  switch (action.type) {
    case "APP_STATE": {
      return { ...state, ...action.state };
    }

    case "update": {
      return { ...state, loaded: true, session: true };
    }

    case "codeSent": {
      return { ...state, codeSent: true, confirmation: action.confirmation };
    }
    default:
      return state;
  }
};

export default reducer;
