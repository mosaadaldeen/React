import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
  const startCount = () => setCount(count + 1); // State modifier to add 1 to count

  return (
    <div>
      <Button startCount={startCount} count={count} />
      <p>{count}</p>
      <h3>{feedback}</h3>
    </div>
  );
};

const Button = ({ startCount }) => {
  return <button onClick={() => startCount()}>Add 1</button>;
};

export default Counter;
