import React, { InputHTMLAttributes, useEffect, useRef } from "react";

const UseEffectExplain = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // side effect, that need to b run after rendering the component
    if (inputRef.current) inputRef.current.focus();
    document.title = "My APP";
  });

  return (
    <div>
      <input ref={inputRef} type="text" className="form-control"></input>
    </div>
  );
};

export default UseEffectExplain;
