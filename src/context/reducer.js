export const githubUsersReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
        error: { isError: false, message: "" },
      };

    case "USER":
      return {
        ...state,
        isLoading: false,
        users: { ...action.payload },
        error: { isError: false, message: "" },
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        error: { isError: true, message: action.payload },
      };
    default:
      return state;
  }
};
