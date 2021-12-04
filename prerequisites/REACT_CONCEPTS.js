/* eslint-disable import/first */
/**
 * ===========
 * useState
 * ===========
 */
import { useState } from "react";

export const SomeComponent = (props) => {
  // State and state setter returned as array.
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    // State setter takes a callback that lets you access previous state.
    setCounter((prevState) => prevState + 1);
  };
  return (
    <>
      <div>{counter}</div>
      <button onClick={handleClick}>Increase counter</button>
    </>
  );
};

/**
 * ============
 * Context
 * ============
 */

import { createContext, useContext } from "react";
import { reviewedFruits } from "./JS_CONCEPTS";

// Create the context with initial values
const FruitContext = createContext({ fruits: {}, updateFruits: () => {} });

// The provider holds state and passes it and ways to interact with it.
const FruitProvider = () => {
  const [fruits, setFruits] = useState(reviewedFruits);
  return (
    <FruitContext.Provider
      value={{ fruits, updateFruits: setFruits }}
    ></FruitContext.Provider>
  );
};

// The component that consumes the state
const FruitReview = (props) => {
  const { fruits, setFruits } = useContext(FruitContext);
  // blah, blah, blah
};

// The component can consume the state when it is wrapped in the provider.
export const App = () => {
  return (
    <FruitProvider>
      <FruitReview />
    </FruitProvider>
  );
};
