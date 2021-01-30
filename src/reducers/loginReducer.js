export function loginReducer(state, action) {
    switch (action.type) {
        case 'LOGIN': {
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        }
        case 'SUCCESS': {
            return {
                ...state,
                isloggedIn: true,
                username: '',
                password: '',
            };
        }
        case 'ERROR': {
            return {
                ...state,
                error: 'Incorrect username or password',
                isLoading: false,
            };
        }
        case 'LOGOUT': {
            return {
                ...state,
                isloggedIn: false,
                isLoading: false,
            };
        }
        case 'FIELD': {
            return {
                ...state,
                [action.field]: action.value,
            };
        }
        default:
            break;
    }

    return state;
}
