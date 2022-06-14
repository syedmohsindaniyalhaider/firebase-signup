import React, { useState } from "react";

import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import Home from "./Components/Home/Home";
import "./App.css";

const App = () => {
  const [layout, setLayout] = useState(false);
  const [userExist, setUserExist] = useState(null);
  return (
    <>
      <div className="outer-form">
        {!userExist && <h2 className="main-heading">Welcome to React Login</h2>}
        {userExist && <h2 className="main-heading">Welcome Home</h2>}
        {!userExist && (
          <div className="center group-btn">
            <button className="btn" onClick={() => setLayout(false)}>
              Sign In
            </button>
            <button className="btn" onClick={() => setLayout(true)}>
              Sign Up
            </button>
          </div>
        )}
      </div>
      {layout && <SignUp />}
      {!layout && !userExist && (
        <SignIn userExist={userExist} setUserExist={setUserExist} />
      )}
      {userExist && <Home />}
    </>
  );
};

export default App;
