import React, { useState } from "react";

const useInput = (value, text) => {
  const [valueInput, setValueInput] = useState(value);
  const [propsInput] = useState({
    placeholder: text,
    onChange: (e) => {
      setValueInput(e.target.value);
    },
  });
  return [valueInput, propsInput];
};

export default useInput;
