import React, { useState } from "react";
import Child from "./Child";
import { MyProvider } from "./Context";
import { Provider } from "react-redux";
import { store } from "./Store";

export function App() {
  const [counter, setCounter] = useState(0);
  return (
    <Provider store={store}>
      <h1>Hello React.</h1>
      {counter}
      <h2>Start editing to see some magic happen!</h2>
      <Child name="shulbhi" counter={counter} setCounter={setCounter} />
    </Provider>
  );
}

// Log to console
console.log("Hello console");
