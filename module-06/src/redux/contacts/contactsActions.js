import { createAction } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    contact: { id: uuid(), name: name, number: number },
  },
}));

const contactRemove = createAction("contacts/remove");

const contactFilter = createAction("contacts/contactFilter");

const contactMassege = createAction("contacts/message");

export default { addContact, contactRemove, contactFilter, contactMassege };
