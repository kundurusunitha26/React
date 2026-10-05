import { useState, useEffect } from "react";

function LifecycleExample() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev >= 150) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Timer</h2>
      <h1>{seconds} seconds</h1>
    </div>
  );
}

export default LifecycleExample;