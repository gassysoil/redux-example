import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const toggleCounterHandler = () => {};

  const counter = useSelector((state) => state.counter);

  // dispatch function && type -> controls reducer function in ReduxStore.js
  const dispatch = useDispatch();
  function incrementHandler() {
    dispatch({ type: "increment" });
  }

  function decrementHandler() {
    dispatch({ type: "decrement" });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button className={classes.counter_button} onClick={incrementHandler}>
          Increment
        </button>
        <button className={classes.counter_button} onClick={decrementHandler}>
          decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
