import { useEffect, useRef, useState } from "react";

const Verification = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const changeHandler = (event, index) => {
    const newCode = [...code];
    newCode[index] = event.target.value;
    setCode(newCode);

    if (event.target.value !== "" && index < code.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const clearHander = () => {
    setCode(["", "", "", ""]);
    inputRefs.current[0].focus();
  };

  return (
    <div>
      {code.map((value, index) => (
        <input
          key={index}
          value={value}
          type="number"
          min="0"
          max="9"
          onChange={(event) => changeHandler(event, index)}
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
      <button onClick={clearHander}>Clear</button>
    </div>
  );
};

export default Verification;
