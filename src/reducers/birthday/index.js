import { validateBirthday } from "../../api";

const initialState = { value: "", isLoading: false, error: "" };

const reducer = (state = initialState, { type, value }) => {
  switch (type) {
    case UPDATE:
      return { value, isLoading: true, error: "" };
    case IS_VALID:
      return { ...state, isLoading: false };
    case NOT_VALID:
      return {
        ...state,
        isLoading: false,
        error: "Please select a date in the past",
      };
    default:
      return state;
  }
};

export default reducer;

// ACTIONS
export const UPDATE = "UPDATE";
export const IS_VALID = "IS_VALID";
export const NOT_VALID = "NOT_VALID";

// ACTION CREATORS
const update = (value) => ({ type: UPDATE, value });
const onValid = () => ({ type: IS_VALID });
const onNotValid = () => ({ type: NOT_VALID });

// THUNK
export const updateBirthday = (value) => async (dispatch) => {
  dispatch(update(value));
  const isValid = await validateBirthday(value);

  if (isValid) {
    dispatch(onValid());
  } else {
    dispatch(onNotValid());
  }
};

// SELECTORS
export const getBirthday = ({ birthday }) => birthday;

export const getIsSubmitDisabled = (state) => {
  const birthday = getBirthday(state);

  return !birthday?.value || birthday?.isLoading || !!birthday?.error;
};
