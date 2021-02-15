import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const onAddContact = (state = [], action) => {
  const vtf = state.find((item) => item.name === action.payload.contact.name);

  console.log("state", vtf);
  if (vtf) {
    console.log("werwer", vtf);
    contactsActions.contactMassege();
    return;
  }
  return [...state, action.payload.contact];
};

const onRemoveContact = (state, action) =>
  state.filter((contact) => {
    return contact.id !== action.payload;
  });

const items = createReducer([], {
  [contactsActions.addContact]: onAddContact,
  [contactsActions.contactRemove]: onRemoveContact,
});

const filter = createReducer("", {
  [contactsActions.contactFilter]: (state, action) => action.payload,
});

const nameAlreadyExist = createReducer(false, {
  [contactsActions.contactMassege]: (state, action) => !state,
});

export default combineReducers({
  items,
  filter,
  nameAlreadyExist,
});
