

import React, { useState, useLayoutEffect, useRef } from 'react';

function Chat() {
  const chatRef = useRef(null);
  useLayoutEffect(() => {
chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, []);

  return (
  
      <div ref={chatRef} style={{height:"150px",border:"1px solid #ccc",overflow:"scroll"}}>
        <p>Hello</p>
        <p>how are you</p>
        <p>Testing...</p>
        <p>Hello</p>
        <p>how are you</p>
        <p>Testing...</p><p>Hello</p>
        <p>how are you</p>
        <p>Testing...</p><p>Hello</p>
        <p>how are you</p>
        <p>Testing...</p><p>Hello</p>
        <p>how are you</p>
        <p>Testing...</p><p>Hello</p>
        <p>how are you</p>
        <p>Testing...</p><p>Hello</p>
        <p>how are you</p>
        <p>Testing...</p>
      </div>

  
  );
}

export default Chat;