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
    <section className="flex flex-col justify-between w-[450px] h-64 bg-white p-5 border border-solid border-gray-300 rounded-md">
      <p className="font-bold">Enter your 4 digits verification code:</p>
      <div className="flex items-center gap-x-2.5 justify-center">
        {code.map((value, index) => (
          <input
            key={index}
            value={value}
            type="number"
            min="0"
            max="9"
            onChange={(event) => changeHandler(event, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            className="appearance-none outline-none w-16 py-0.5 bg-inherit border-b-2 border-gray-300 focus:border-sky-500 text-center text-3xl font-bold"
          />
        ))}
      </div>
      <div className="flex flex-col gap-y-2.5">
        <div className="flex justify-end gap-x-4">
          <button className="px-2.5 py-1.5 text-stone-50 bg-green-700 rounded border border-green-700 ">
            VERIFY CODE
          </button>
          <button
            onClick={clearHander}
            className="px-2.5 py-1.5 text-red-600 rounded border border-red-600 "
          >
            CLEAR
          </button>
        </div>
        <p className="text-sky-500 cursor-pointer text-end">
          correct phone number
        </p>
      </div>
    </section>
  );
};

export default Verification;
