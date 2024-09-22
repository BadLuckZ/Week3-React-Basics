import { useState, useEffect } from "react";

const MyCountDown = ({ startTime }) => {
  const [count, setCount] = useState(startTime);
  useEffect(() => {
    const id = setInterval(() => {
      // setCount(prev - 1); -> this will always show count at 9
      setCount((prev) => prev - 1);
    }, 1000);

    // If don't have this return, count will decrease by more than 1
    return () => {
      clearInterval(id);
    };
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
    </>
  );
};

export default MyCountDown;
