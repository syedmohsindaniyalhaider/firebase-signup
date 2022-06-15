import React from "react";
import styles from "./style.module.css";
import Input from "../../UI/Input";
import useInput from "../../Hooks/useInput";

const SignUpForm = (props) => {
  const {
    value: firstName,
    hasError: firstNameHasError,
    isValid: firstNameIsValid,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: lastName,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: email,
    hasError: emailHasError,
    isValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim().includes("@"));
  const {
    value: password,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim() !== "");
  const {
    value: confirmPassword,
    hasError: confirmPasswordHasError,
    isValid: confirmPasswordIsValid,
    inputChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPassword,
  } = useInput((value) => value.trim() !== "");

  let formIsValid =
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid;
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
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPassword();
    resetConfirmPassword();
  };
  return (
    <>
      <div className={styles["outer-form"]}>
        <form className={styles.form} onSubmit={submitHandler}>
          <h2 className={styles["form-head"]}>Sign Up</h2>
          <Input
            label="First Name"
            name="firstname"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            className={firstNameHasError === true ? styles.invalid : ""}
          />
          <span
            className={
              firstNameHasError === true ? styles["not-valid"] : styles.valid
            }
          >
            Enter a valid name.
          </span>
          <Input
            label="Last Name"
            name="lastname"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            className={lastNameHasError === true ? styles.invalid : ""}
          />
          <span
            className={
              lastNameHasError === true ? styles["not-valid"] : styles.valid
            }
          >
            Enter a valid name.
          </span>
          <Input
            label="Email"
            name="email"
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            className={emailHasError === true ? styles.invalid : ""}
          />
          <span
            className={
              emailHasError === true ? styles["not-valid"] : styles.valid
            }
          >
            Enter a valid email.
          </span>
          <Input
            label="Password"
            name="password"
            value={password}
            type="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            className={passwordHasError === true ? styles.invalid : ""}
          />
          <span
            className={
              passwordHasError === true ? styles["not-valid"] : styles.valid
            }
          >
            Enter a valid password.
          </span>
          <Input
            label="Confirm Password"
            name="confirmpassword"
            value={confirmPassword}
            type="password"
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlurHandler}
            className={confirmPasswordHasError === true ? styles.invalid : ""}
          />
          <span
            className={
              confirmPasswordHasError === true
                ? styles["not-valid"]
                : styles.valid
            }
          >
            Enter a valid password.
          </span>
          <div>
            <button
              className={styles.button}
              disabled={formIsValid === false ? true : false}
            >
              Sign Up
            </button>
            <span
              className={
                formIsValid === false ? styles["not-valid"] : styles.valid
              }
            >
              Please enter all the details.
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
