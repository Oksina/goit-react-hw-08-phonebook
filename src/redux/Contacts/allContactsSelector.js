import { createSelector } from '@reduxjs/toolkit';
export const getLoading = state => state.contacts.loading;
export const getAllContacts = state => state.contacts.items;

export const getFilter = state => state.filter;

export const getVisibleContacts = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) => {
        console.log(getFilter);
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(
            ({ name, number }) =>
                name
                    .toLowerCase()
                    .includes(normalizedFilter) ||
                number
                    .toLowerCase()
                    .includes(normalizedFilter),
        );
    },
);
