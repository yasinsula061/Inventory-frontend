import authService from '../services/authService';
import actions from './actions.js';

const loginSuccess = user => {
    return {
        type: actions.LOGIN_SUCCESS,
        user
    };
};

const loginError = error => {
    return {
        type: actions.LOGIN_ERROR,
        error
    };
};

export const login = (username, password) => {
    return dispatch => {
        authService.login(username, password)
            .then(data => {
                data.message
                    ? dispatch(loginError(data.message))
                    : (dispatch(loginSuccess(data)))
            })
            .catch(err => dispatch(loginError(err)));
    }
}

export const logout = () => {
    authService.logout();
    return {
        type: actions.LOGOUT
    };
}