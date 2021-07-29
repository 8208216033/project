import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  let myvar= 345;

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (


    <div>
      <div>
    <h1>Hello</h1>
  </div>
      <h1>{count}</h1>
      <h3>{myvar}</h3>
      <input type="button" onClick={incrementCount} />
    </div>
    
  
  );
};
 





export default App;
