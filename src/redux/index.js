export const combineReducers = (reducers) => reducers;

export const createStore = (reducers, middleware) => ({
  initialState: Object.entries(reducers).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value(undefined, {}),
    }),
    {},
  ),
  reducers,
  middleware,
});

export const applyMiddleware = (middleware) => middleware;
