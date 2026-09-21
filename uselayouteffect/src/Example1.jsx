import React, { useState, useLayoutEffect, useRef } from 'react';

function Example1() {
  const BoxRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (BoxRef.current) {
      setHeight(BoxRef.current.clientHeight);
    }
  }, []);

  return (
    <div>
      <div
        ref={BoxRef}
        style={{
          width: "200px",
          padding: "20px",
          background: "#eee"
        }}
      >
        Hello world Measure Me
      </div>

      <p>Height: {height}px</p>
    </div>
  );
}

export default Example1;