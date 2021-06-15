import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from './types';

export const restoreToken = (persona) => (
    {
        type: RESTORE_TOKEN,
        token: persona
    }
)

export const signIn = (persona) => (
    {
        type: SIGN_IN,
        token: persona
    }
)


export const signOut = () => (
    {
        type: SIGN_OUT
    }
)