const initialState = {
  user: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export default userReducer;