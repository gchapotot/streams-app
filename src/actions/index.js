import streams from '../apis/streams';

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

export const createStream = formValues => async dispatch => {
    const response = await streams.post('/streams', formValues);
    dispatch({
        type: actions.CREATE_STREAM,
        payload: response.data
    });
};