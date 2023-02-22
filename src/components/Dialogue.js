import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTextFieldData } from "../redux/dialogue/dialogueActions";

const Dialogue = () => {
  const [display, setDisplay] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { textFieldData } = useSelector((state) => state.dialogue);
  const dispatch = useDispatch();

  useEffect(() => {
    const keyPressHandler = (e) => {
      const { ctrlKey, shiftKey, keyCode } = e;
      if (ctrlKey && shiftKey && keyCode === 113) {
        e.preventDefault();
        setDisplay(true);
      }
      if (ctrlKey && shiftKey && keyCode === 114) {
        e.preventDefault();
        document.getElementById("text-input").focus();
      }
    };

    document.addEventListener("keydown", keyPressHandler);

    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
  }, []);

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
    dispatch(setTextFieldData(e.target.value));
  };

  return (
    <section
      className={`w-[450px] h-40 my-5 bg-white p-5 border border-solid border-gray-300 rounded-md ${
        display ? "flex flex-col items-center justify-between" : "hidden"
      } `}
    >
      <h1 className="font-bold text-lg">Dialogue</h1>
      <input
        type="text"
        id="text-input"
        value={inputValue}
        onChange={inputChangeHandler}
        placeholder="Write something..."
        className="outline-none py-1.5 px-2 border border-solid border-gray-300 rounded-md focus:border-sky-500"
      />
      <p className="font-bold text-center text-sm">{textFieldData}</p>
    </section>
  );
};

export default Dialogue;
