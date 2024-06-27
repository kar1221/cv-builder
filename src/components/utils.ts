import type { DetailsAction, DetailsState } from "./types";
import { DetailsActionKind } from "./types";

function DetailsReducer(state: DetailsState, action: DetailsAction) {
  const { type, payload } = action;

  switch (type) {
    case DetailsActionKind.UPDATE_FULLNAME:
      return { ...state, fullname: payload };
    case DetailsActionKind.UPDATE_POSITION:
      return { ...state, position: payload };
    case DetailsActionKind.UPDATE_CONTACTS:
      if (!action.contactsKey) {
        return state;
      }
      return {
        ...state,
        contacts: {
          ...state.contacts,
          [action.contactsKey]: payload,
        },
      };
    default:
      return state;
  }
}

const initialState: DetailsState = {
  fullname: "John Doe",
  position: "Frontend Developer",

  contacts: {
    phoneNumber: "123-456-7890",
    email: "QgBp6@example.com",
    address: "123 Main St, Anytown USA",
  },
};

export { DetailsReducer, initialState };
