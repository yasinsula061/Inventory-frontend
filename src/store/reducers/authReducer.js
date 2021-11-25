import actions from "../actions/actions.js";

const initState = {
    user: '',
    isAuthenticated: false,
    error: false,
    errorMessage: '',
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                isAuthenticated: true,
                error: false,
                errorMessage: ''
            };
        case actions.LOGIN_ERROR:
            return {
                ...state,
                user: '',
                error: true,
                isAuthenticated: false,
                errorMessage: action.error
            };
        case actions.LOGOUT:
            return {
                user: ''
            };
        default:
            return state;
    }
}

export default authReducer;