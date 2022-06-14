import React, { useState } from "react";
import styles from "./style.module.css";

const Todos = ({ todos, loading, error }) => {
  const [line, setLine] = useState(false);
  const [id, setId] = useState("");

  const handleCheck = (id) => {
    setLine((prevState) => !prevState);
    setId(id);
  };
  return (
    <>
      <div>
        <ul className={styles.list}>
          {error && <p>Error Loading</p>}
          {loading && <p>Loading...</p>}
          {!loading &&
            todos?.length > 0 &&
            todos?.map((item) => (
              <li className={styles.items} key={item.id}>
                <span
                  className={line === true && id === item.id ? styles.line : ""}
                >
                  {item.text}
                </span>
                <span
                  className={styles.check}
                  onClick={() => handleCheck(item.id)}
                >
                  Check
                </span>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Todos;
