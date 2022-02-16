import React from "react";
import { useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from "./actions";

function App() {

  const counter = useSelector(state => state.counter); /*selects state.counter 
  value and stores in counter */
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>

      <div>
        {/* dispatch decrement action to the reducer function */}
        <button onClick={() => dispatch(decrement())}>-</button>

        {/* dispatch increment action to the reducer function */}
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}

export default App;
