const accessReducer = (state, action) => {
  switch (action.type) {
    case "Auth/AccessLogin":
      return {
        ...state,
        accessLogin: action.payload,
      };
    default:
      return state;
  }
};

export { accessReducer };
