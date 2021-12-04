import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserDetails, Birthday, Name } from "./components";

import "./App.css";
import { validateBirthday } from "./api";
import Home from "./components/Home";

function App() {
  const [name, setName] = useState({ first: "", last: "" });
  const [birthday, setBirthday] = useState({
    value: "",
    error: "",
    isLoading: false,
  });

  const updateBirthday = async (value) => {
    setBirthday((prevState) => ({
      ...prevState,
      value,
      isLoading: true,
      error: "",
    }));
    const isValid = await validateBirthday(value);
    if (isValid) {
      setBirthday((prevState) => ({ ...prevState, isLoading: false }));
    } else {
      setBirthday((prevState) => ({
        ...prevState,
        isLoading: false,
        error: "Please select a date in the past",
      }));
    }
  };

  const updateFirstName = (value) =>
    setName((prevState) => ({ ...prevState, first: value }));

  const updateLastName = (value) =>
    setName((prevState) => ({ ...prevState, last: value }));

  const firstName = name?.first;
  const lastName = name?.last;
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/name"
            element={
              <Name
                firstName={firstName}
                lastName={lastName}
                updateFirstName={updateFirstName}
                updateLastName={updateLastName}
                isContinueDisabled={!firstName || !lastName}
              />
            }
          />
          <Route
            path="/birthday"
            element={
              <Birthday
                birthday={birthday}
                updateBirthday={updateBirthday}
                isSubmitDisabled={
                  !birthday?.value || birthday?.isLoading || !!birthday?.error
                }
              />
            }
          />
          <Route
            path="/user-details"
            element={
              <UserDetails birthday={birthday?.value} fullName={fullName} />
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
