import React, { useState } from "react";
import SignInForm from "./SignInForm";

const SignIn = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const url =
        "https://react-test-406f6-default-rtdb.firebaseio.com/users.json";
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Something went Wrong!");
      }
      const data = await res.json();
      const loadedUsers = [];
      for (const key in data) {
        loadedUsers.push({
          id: key,
          email: data[key]?.email,
          password: data[key]?.password,
        });
      }
      const matchUser = loadedUsers.filter(
        (user) => user.email === userEmail && user.password === userPassword
      );
      const boolUserMatch = matchUser.length > 0 ? true : false;
      props.setUserExist(boolUserMatch);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  return (
    <SignInForm
      setUserPassword={setUserPassword}
      setUserEmail={setUserEmail}
      loadUsers={loadUsers}
      userExist={props.userExist}
      loading={loading}
      error={error}
    />
  );
};

export default SignIn;
