import React, { useState, useEffect, useCallback } from "react";
import Input from "../../UI/Input";
import Todos from "../Todos/Todos";
import styles from "./style.module.css";

const Home = (props) => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addTodo = async (todos) => {
    await fetch(
      "https://react-test-406f6-default-rtdb.firebaseio.com/TODO_LIST.json",
      {
        method: "POST",
        body: JSON.stringify(todos),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };

  const getAllTodos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const url =
        "https://react-test-406f6-default-rtdb.firebaseio.com/TODO_LIST.json";
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Something went Wrong!");
      }
      const data = await res.json();
      console.log(data);
      const loadedTodos = [];
      for (const key in data) {
        console.log("Todos:", data[key]?.text);
        loadedTodos.push({
          id: key,
          text: data[key]?.text,
        });
      }
      console.log("Todos ::", loadedTodos);
      setTodos(loadedTodos);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getAllTodos();
  }, [getAllTodos]);

  const handleClick = (e) => {
    e.preventDefault();
    const newTodo = {
      text: todo,
    };
    addTodo(newTodo);
    setTodo("");
  };
  return (
    <>
      <div className={styles["outer-form"]}>
        <div className={styles.padding}>
          <h2>Home</h2>
          <Input
            name="todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className={styles.button} onClick={handleClick}>
            Add
          </button>
        </div>
        {<Todos todos={todos} loading={loading} error={error} />}
      </div>
    </>
  );
};

export default Home;
