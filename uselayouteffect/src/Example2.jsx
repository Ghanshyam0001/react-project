

import React, { useState, useLayoutEffect, useRef } from 'react';

function Example2() {
  const BoxRef = useRef(null);
  useLayoutEffect(() => {
   const el = BoxRef.current
   const width = el.offsetWidth;

   el.style.transform = `translateX(${width}px)`
  }, []);

  return (
  
      <div ref={BoxRef} style={{padding: "30px",background: "skyblue",transition:"3s"}}>
        Hello world Measure Me
      </div>

  
  );
}

export default Example2;