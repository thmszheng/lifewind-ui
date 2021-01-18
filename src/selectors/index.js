import { createSelector } from 'reselect';

const savedLoginSelector = state => state.account.savedLogin || {};

export const saveLogin = (state, payload) => ({
  ...state,
  savedLogin: {
    ...payload
  }
});

export const getSavedLogin = createSelector(
  savedLoginSelector,
  object => object
);
