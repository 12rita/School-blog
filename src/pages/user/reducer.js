import cloneDeep from 'lodash/cloneDeep';
let initState = {
    data: null
        // {
        //     id: '',
        //     login: '',
        //     email: '',
        //     firstName: '',
        //     lastName: '',
        //     patronymic: '',
        //     avatar: '',
        //     registrationDate: ''
        // }

}
function merge(state, someObject) {
    const clonnedState = cloneDeep(state);

    return Object.assign(clonnedState, someObject);
}

export default function userReducer(state = initState, action) {
    switch (action.type) {
        case 'GET_USER_SUCCESS':
            return {
                // data: {
                //     ...state.data,
                //     [action.payload.fieldId]: action.payload.value
                // }
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}