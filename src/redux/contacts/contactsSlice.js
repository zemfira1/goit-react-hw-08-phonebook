import { createSlice } from '@reduxjs/toolkit';
import { initialContactsState } from './initialState';
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from '../operations';

const contactsListSlice = createSlice({
  name: 'contactsList',
  initialState: initialContactsState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.contacts.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items = [...state.contacts.items, action.payload];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.contacts.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.error = action.payload;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.map(contact => {
          if (contact.id === action.payload.id) {
            return action.payload;
          }
          return contact;
        });
      }),
});

export const contactsListReducer = contactsListSlice.reducer;
