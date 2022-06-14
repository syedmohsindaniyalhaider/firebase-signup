import React from "react";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  const addUser = async (userDetails) => {
    await fetch(
      "https://react-test-406f6-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };

  return <SignUpForm addUser={addUser} />;
};

export default SignUp;
