import { createContext, useContext, useState } from "react";

const ReduxContext = createContext({
  dispatch: () => {},
  getState: () => {},
});

export const useDispatch = () => {
  const { dispatch } = useContext(ReduxContext);
  return dispatch;
};

export const useSelector = (selector) => {
  const { getState } = useContext(ReduxContext);
  return selector(getState());
};

export const Provider = ({ children, store }) => {
  const [state, setState] = useState(store.initialState);

  const getState = () => state;

  const dispatch = (action) => {
    setState((prevState) => {
      return Object.entries(store.reducers).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value(prevState[key], action),
        }),
        {},
      );
    });
  };
  console.log(store);
  return (
    <ReduxContext.Provider
      value={{ dispatch: store.middleware(dispatch, getState), getState }}
    >
      {children}
    </ReduxContext.Provider>
  );
};
