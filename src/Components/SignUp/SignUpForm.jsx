import React, { useRef, useState } from "react";
import styles from "./style.module.css";
import Input from "../../UI/Input";

const SignUpForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameValid, setFirstNameValid] = useState(null);
  const [lastName, setLastName] = useState("");
  const [lastNameValid, setLastNameValid] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(null);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(null);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  let formIsValid =
    firstNameValid &&
    lastNameValid &&
    passwordValid &&
    emailValid &&
    confirmPasswordValid;

  const firstNameValidity = () => {
    if (firstNameRef.current.value !== "") {
      setFirstNameValid(true);
    } else {
      setFirstNameValid(false);
    }
  };
  const lastNameValidity = () => {
    if (lastNameRef.current.value !== "") {
      setLastNameValid(true);
    } else {
      setLastNameValid(false);
    }
  };
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
  const confirmPasswordValidity = () => {
    if (confirmPasswordRef.current.value !== "") {
      setConfirmPasswordValid(true);
    } else {
      setConfirmPasswordValid(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userDetails = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    props.addUser(userDetails);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <>
      <div className={styles["outer-form"]}>
        <form className={styles.form} onSubmit={submitHandler}>
          <h2 className={styles["form-head"]}>Sign Up</h2>
          <Input
            ref={firstNameRef}
            label="First Name"
            name="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onBlur={firstNameValidity}
            className={firstNameValid === false ? styles.invalid : ""}
          />
          <span
            className={
              firstNameValid === false ? styles["not-valid"] : styles.valid
            }
          >
            Not Valid
          </span>
          <Input
            ref={lastNameRef}
            label="Last Name"
            name="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onBlur={lastNameValidity}
            className={lastNameValid === false ? styles.invalid : ""}
          />
          <span
            className={
              lastNameValid === false ? styles["not-valid"] : styles.valid
            }
          >
            Not Valid
          </span>
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
          <Input
            ref={confirmPasswordRef}
            label="Confirm Password"
            name="confirmpassword"
            value={confirmPassword}
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={confirmPasswordValidity}
            className={confirmPasswordValid === false ? styles.invalid : ""}
          />
          <span
            className={
              confirmPasswordValid === false
                ? styles["not-valid"]
                : styles.valid
            }
          >
            Not Valid
          </span>
          <div>
            <button
              className={styles.button}
              disabled={
                formIsValid === null || formIsValid === false ? true : false
              }
            >
              Sign Up
            </button>
            <span
              className={
                formIsValid === null || formIsValid === false
                  ? styles["not-valid"]
                  : styles.valid
              }
            >
              Please enter details.
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
