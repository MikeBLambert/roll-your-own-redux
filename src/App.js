import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserDetails, Birthday, Name } from "./pages";

import "./App.css";
import { Provider } from "./react-redux";

import { applyMiddleware, createStore } from "./redux";
import thunk from "./redux-thunk";
import reducers from "./reducers";
import Home from "./components/Home";

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/name" element={<Name />} />
            <Route path="/birthday" element={<Birthday />} />
            <Route path="/user-details" element={<UserDetails />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
