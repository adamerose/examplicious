import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "../../store/counterSlice";
import styled from "styled-components";

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <Wrapper>
      <div className="row">
        <button
          className="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className="value">{count}</span>
        <button
          className="button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className="row">
        <input
          className="textbox"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className="button"
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
        >
          Add
        </button>
        <button
          className="button"
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </Wrapper>
  );
}

export default Counter;

const Wrapper = styled.div`
  .row {
    display: flex;
  }

  .row:not(:last-child) {
    margin-bottom: 16px;
  }

  .value {
    font-size: 78px;
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 2px;
    font-family: "Courier New", Courier, monospace;
  }

  .textbox {
    font-size: 32px;
    padding: 2px;
    width: 64px;
    text-align: center;
    margin-right: 8px;
  }

  .button {
    position: relative;
    margin-left: 8px;
  }
`;
