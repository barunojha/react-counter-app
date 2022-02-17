import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, cakeCount } from "./actions";

function App() {

  const counter = useSelector(state => state.counter); /*selects state.counter 
  value and stores in counter */
  const cake = useSelector(state => state.cakeCounter)
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(null);

  const handleChange = (e) => {
    e.persist();
    setInputValue((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(cakeCount(inputValue));
  }

  return (
    <div className="App">
      <h1>Counter {counter}</h1>

      <div>
        {/* dispatch decrement action to the reducer function */}
        <button onClick={() => dispatch(decrement())}>-</button>

        {/* dispatch increment action to the reducer function */}
        <button onClick={() => dispatch(increment())}>+</button>
      </div>

      <hr/>

      <div>Number of Cakes: {cake}</div>

      <form onSubmit={handleSubmit}>
        <input
        name="payload"
        type="number"
        onChange={handleChange}
        />
        <button>
        Buy X Cakes
      </button>
      </form>
    </div>
  );
}

export default App;
