import React, { useRef, useState } from "react";
import styles from "./style.module.css";
import Input from "../../UI/Input";

const SignInForm = ({
  email,
  password,
  setEmail,
  setPassword,
  loadUsers,
  userExist,
  loading,
  error,
}) => {
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();

  let formIsValid = passwordValid && emailValid;

  const passwordValidity = () => {
    if (passwordRef.current.value !== "") {
      setPasswordValid(true);
    } else if (email.includes("@")) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };
  const emailValidity = () => {
    if (emailRef.current.value !== "") {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    loadUsers();
    setEmail("");
    setPassword("");
  };
  return (
    <div className={styles["outer-form"]}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h2 className={styles["form-head"]}>Sign In</h2>
        <Input
          ref={emailRef}
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={emailValidity}
          className={
            emailValid === false || (email.length > 0 && !email.includes("@"))
              ? styles.invalid
              : ""
          }
        />
        <span
          className={
            emailValid === false || (email.length > 0 && !email.includes("@"))
              ? styles["not-valid"]
              : styles.valid
          }
        >
          Not Valid
        </span>
        <Input
          ref={passwordRef}
          label="Password"
          name="password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          onBlur={passwordValidity}
          className={passwordValid === false ? styles.invalid : ""}
        />
        <span
          className={
            passwordValid === false ? styles["not-valid"] : styles.valid
          }
        >
          Not Valid
        </span>
        <div>
          <button className={styles.button}>Sign In</button>
        </div>
        {
          <span
            className={
              formIsValid === null || formIsValid === false
                ? styles["form-valid"]
                : styles.valid
            }
          >
            Enter details to Login.
          </span>
        }
        {!loading && !userExist && userExist !== null && (
          <span>User not found!</span>
        )}
        {loading && <span>Loading...</span>}
        {!loading && <span>{error}</span>}
      </form>
    </div>
  );
};

export default SignInForm;
