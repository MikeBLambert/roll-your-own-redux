const initialState = { first: "", last: "" };

const reducer = (state = initialState, { type, value }) => {
  switch (type) {
    case FIRST_NAME_UPDATE:
      return { ...state, first: value };
    case LAST_NAME_UPDATE:
      return { ...state, last: value };
    default:
      return state;
  }
};

export default reducer;

// ACTION TYPES
export const FIRST_NAME_UPDATE = "FIRST_NAME_UPDATE";
export const LAST_NAME_UPDATE = "LAST_NAME_UPDATE";

// ACTION CREATORS
export const updateFirstName = (value) => ({ type: FIRST_NAME_UPDATE, value });

export const updateLastName = (value) => ({ type: LAST_NAME_UPDATE, value });

// SELECTORS
export const getName = ({ name }) => name;

export const getFirstName = (state) => {
  const name = getName(state);
  return name?.first;
};

export const getLastName = (state) => {
  const name = getName(state);
  return name?.last;
};

export const getFullName = (state) => {
  const firstName = getFirstName(state);
  const lastName = getLastName(state);

  return `${firstName} ${lastName}`;
};

export const getIsContinueDisabled = (state) => {
  const firstName = getFirstName(state);
  const lastName = getLastName(state);
  return !firstName || !lastName;
};
