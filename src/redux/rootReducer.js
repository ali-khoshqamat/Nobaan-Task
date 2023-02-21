import { combineReducers } from "redux";
import dialogueReducer from "./dialogue/dialogueReducer";

const rootReducer = combineReducers({
  dialogue: dialogueReducer,
});
export default rootReducer;
