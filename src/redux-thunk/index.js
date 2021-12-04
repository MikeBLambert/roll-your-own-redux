const thunk = (dispatch, getState) => (action) => {
  if (typeof action === "function") return action(dispatch, getState);
  return dispatch(action);
};

export default thunk;
