import cloneDeep from 'lodash/cloneDeep';

let initState = {
    data: null,
    isShownModal: false,
    currentPassword: '',
    newPassword: '',
    errors: {
        oldPass: '',
        newPass: ''
    },
    notifier: false

}

function merge(state, someObject) {
    const clonnedState = cloneDeep(state);

    return Object.assign(clonnedState, someObject);
}

export default function userReducer(state = initState, action) {
    switch (action.type) {
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                data: action.payload
            };
        case 'CHANGE_MODAL':
            return {
                ...state,
                currentPassword: '',
                newPassword: '',
                errors: {},
                isShownModal: action.payload
            }
        case 'MODAL_CHANGE_DATA_FORM':
            return {
                ...state,
                [action.payload.fieldId]: action.payload.value
            };
        case 'CHANGE_PASSWORD_SUCCESS':{
            return {
                ...state,
                isShownModal: !state.isShownModal,
                notifier: true
            }
        }
        case  'CHANGE_PASSWORD_FAIL_CURR_PASS':
        case  'CHANGE_PASSWORD_FAIL_NEW_LENGTH':
            return merge(state, {
                errors: {
                    ...state.errors,
                    [action.id]: action.payload
                }
            })
        case 'OFF_NOTIFY':
            return {
                ...state,
                notifier: false
            }


        default:
            return state;
    }
}