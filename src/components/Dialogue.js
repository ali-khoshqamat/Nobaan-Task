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
    <div style={{ display: display ? "block" : "none" }}>
      <h1>Dialogue</h1>
      <input
        type="text"
        id="text-input"
        value={inputValue}
        onChange={inputChangeHandler}
      />
      <p>{textFieldData}</p>
    </div>
  );
};

export default Dialogue;
