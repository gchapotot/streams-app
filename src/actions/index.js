import * as actions from './types';

export const signIn = (userId) => {
    return {
        type: actions.SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: actions.SIGN_OUT
    };
};