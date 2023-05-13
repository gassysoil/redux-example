import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/CounterSlice"; // named export, must use {}

const Counter = () => {
  // need to ouput the state we need via useSelector
  const counter = useSelector((state) => state.counterReducer.counter);
  const showCounter = useSelector((state) => state.counterReducer.showCounter);

  // dispatch function && type -> controls reducer function in ReduxStore.js
  const dispatch = useDispatch();
  function incrementHandler() {
    dispatch(counterActions.increment());
  }

  function decrementHandler() {
    dispatch(counterActions.decrement());
  }

  var step = 10;
  function increaseHandler() {
    dispatch(counterActions.increase(step));
  }

  function toggleCounterHandler() {
    dispatch(counterActions.toggle());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by {step}</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// import { useDispatch, useSelector } from "react-redux";
// import classes from "./Counter.module.css";

// const Counter = () => {
//   // need to ouput all the state we need vis useSelector
//   const counter = useSelector((state) => state.counter);
//   const showCounter = useSelector((state) => state.showCounter);

//   // dispatch function && type -> controls reducer function in ReduxStore.js
//   const dispatch = useDispatch();
//   function incrementHandler() {
//     dispatch({ type: "increment" });
//   }

//   function decrementHandler() {
//     dispatch({ type: "decrement" });
//   }

//   function increaseHandler() {
//     dispatch({ type: "increase", amount: 5 });
//   }

//   function toggleCounterHandler() {
//     dispatch({ type: "toggle" });
//   }

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {showCounter && <div className={classes.value}>{counter}</div>}
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={increaseHandler}>Increase by 5</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;
