import { SET_TEXT_FIELD_DATA } from "./dialogueTypes";

export const setTextFieldData = (data) => ({
  type: SET_TEXT_FIELD_DATA,
  payload: data,
});
