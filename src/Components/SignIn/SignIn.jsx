import React, { useState } from "react";
import SignInForm from "./SignInForm";

const SignIn = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
        (user) => user.email === email && user.password === password
      );

      const boolUserMatch = matchUser.length > 0 ? true : false;

      props.setUserExist(boolUserMatch);
      setUsers(loadedUsers);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  return (
    <SignInForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      loadUsers={loadUsers}
      userExist={props.userExist}
      loading={loading}
      error={error}
    />
  );
};

export default SignIn;
