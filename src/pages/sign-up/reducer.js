import cloneDeep from 'lodash/cloneDeep';

const initState = {
    dataForm: {
        login: '',
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    },
    errors: {
        login: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
};

function merge(state, someObject) {
    const clonnedState = cloneDeep(state);

    return Object.assign(clonnedState, someObject);
}

function mapErrorFromServer(errorFromServer) {
    const errorCode = Object.keys(errorFromServer)[0];

    switch (errorCode) {
        case 'unique':
            return 'Такой логин уже занят';
        case 'isRequired':
            return 'Поле обязательно для заполнения!';
        default:
            return errorCode;
    }
}

function getFormErrors(payload) {

    const errorKeys = Object.keys(payload);
    const errors = errorKeys.reduce(function(result, errorKey) {
        const errorFromServer = payload[errorKey];
        result[errorKey] = mapErrorFromServer(errorFromServer);
        return result;
    }, {});

    return errors;
}

export default function signUpReducer(state = initState, action) {
    switch (action.type) {
        case 'SIGN_UP_CHANGE_DATA_FORM':
            return merge(state, {
                dataForm: {
                    ...state.dataForm,
                    [action.payload.fieldId]: action.payload.value
                }
            });
        case 'SIGN_UP_CHECK_LOGIN_SUCCESS':
            return {
                ...state,
                errors: {
                    ...state.errors,
                    login: action.payload.exists ? 'Такой логин уже занят' : ''
                }
            };
        case 'SIGN_UP_FAIL':
            return {
                ...state,
                errors: getFormErrors(action.payload)
            };
        default:
            return state;
    }
}
