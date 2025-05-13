import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "../store/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.count);

  const [incrementValue, setIncrementValue] = useState(1);
  const [decrementValue, setDecrementValue] = useState(1);

  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter</h1>
      <p>
        <input
          type="number"
          onChange={(e) => setIncrementValue(e.target.value)}
        />
        <input
          type="number"
          onChange={(e) => setDecrementValue(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByValue(incrementValue))}>
          +
        </button>
        {count}
        <button onClick={() => dispatch(decrementByValue(decrementValue))}>
          -
        </button>
      </p>
    </>
  );
}
