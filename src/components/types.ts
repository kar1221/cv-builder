enum DetailsActionKind {
  UPDATE_FULLNAME = "UPDATE_FULLNAME",
  UPDATE_POSITION = "UPDATE_POSITION",

  UPDATE_CONTACTS = "UPDATE_CONTACTS",
}

interface DetailsAction {
  type: DetailsActionKind;
  payload: string;

  contactsKey?: keyof Contacts;
}

interface DetailsState {
  fullname: string;
  position: string;

  contacts: Contacts;
}

interface Contacts {
  phoneNumber: string;
  email: string;
  address: string;
}

export type { DetailsAction, DetailsState };
export { DetailsActionKind };
