import { createSlice } from '@reduxjs/toolkit';
import data from '../contacts.json';
import { nanoid } from 'nanoid';

const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: data,
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(value) {
                return {
                    payload: {
                        id: nanoid(),
                        ...value,
                    },
                };
            },
        },

        deleteContact(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = slice.actions;
export const selectContacts = state => state.contacts.items;
export default slice.reducer;