import { useEffect, useState } from "react";

const Dialogue = () => {
  const [display, setDisplay] = useState(false);

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

  return (
    <div style={{ display: display ? "block" : "none" }}>
      <h1>Dialogue</h1>
      <input type="text" id="text-input" />
    </div>
  );
};

export default Dialogue;
