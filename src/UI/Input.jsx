import React, { forwardRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef(
  (
    {
      label,
      value,
      type = "text",
      name,
      className = "",
      onChange = () => {},
      onBlur = () => {},
    },
    ref
  ) => {
    return (
      <>
        <div>
          <label>{label}</label>
          <div className={styles["margin-y"]}>
            <input
              className={`${className} ${styles.input}`}
              ref={ref}
              type={type}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          </div>
        </div>
      </>
    );
  }
);

export default Input;
