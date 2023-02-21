import { SET_TEXT_FIELD_DATA } from "./dialogueTypes";

const initialState = {
  textFieldData: "",
};

const dialogueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT_FIELD_DATA:
      return {
        ...state,
        textFieldData: action.payload,
      };
    default:
      return state;
  }
};

export default dialogueReducer;
