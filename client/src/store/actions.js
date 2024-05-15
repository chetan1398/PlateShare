// Existing setUser action
export const setUser = (user) => {
  return {
    type: 'SET_USER',
    payload: user,
  };
};

// New actions for login and logout
export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: user,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};