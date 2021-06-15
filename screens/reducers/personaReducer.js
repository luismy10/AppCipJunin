import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from '../actions/types';

const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
}

const personaReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESTORE_TOKEN:
            return {
                ...state,
                userToken: action.token,
                isLoading: false,
            };
        case SIGN_IN:
            return {
                ...state,
                userToken: action.token,
                isSignout: false
            };
        case SIGN_OUT:
            return {
                ...state,
                isSignout: true,
                userToken: null,
            };
        default:
            return state;
    }
}

export default personaReducer;