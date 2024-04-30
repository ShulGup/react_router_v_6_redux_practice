import React, { useContext } from "react";
import { contextProvider } from "./Context";
import { increment, decrement } from "./action"; // Corrected action names
import {
  increment as incrementAction,
  decrement as decrementAction,
} from "./action";
import { connect, useDispatch, useSelector } from "react-redux";

const Child = ({
  name,
  setCounter,
  counter,
  //   counterValue,
  increment, // Corrected action name
  decrement, // Corrected action name
}) => {
  const { showUI, setShowUI } = useContext(contextProvider);
  const counterValue = useSelector((state) => state.counterValue);
  const dispatch = useDispatch();

  const changeTheCounter = () => {
    setCounter(counter + 1);
    setShowUI(!showUI);
  };

  return (
    <div>
      {name}
      {showUI && "Hello World"}
      {/* {counterValue} */}
      {counterValue}
      <button onClick={changeTheCounter}>Increase the counter</button>
      {/* <button onClick={increment}>Increase the counter value</button>
      <button onClick={decrement}>Decrease the counter value</button> */}
      <button onClick={() => dispatch(decrementAction())}>
        Decrease the counter value
      </button>
      <button onClick={() => dispatch(incrementAction())}>
        Increase the counter value
      </button>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   counterValue: state.counterValue,
// });

// // Correctly map action creators to props
// const mapDispatchToProps = {
//   increment,
//   decrement,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Child);
export default Child;
