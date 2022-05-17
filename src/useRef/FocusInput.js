import React, { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // focus the input element using useRef
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default FocusInput;