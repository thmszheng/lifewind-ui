import {
  LOGIN,
  SAVE_LOGIN,
  CREATE_ACCOUNT
} from './types';

const createAction = type => payload => ({
  type,
  payload
});

export const login = createAction(LOGIN);
export const saveLogin = createAction(SAVE_LOGIN);
export const createAccount = createAction(CREATE_ACCOUNT);
