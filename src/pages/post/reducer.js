const initState = {
    data: null
};

export default function postReducer(state = initState, action) {
    switch (action.type) {
        case 'POST_PAGE_GET_DATA_SUCCESS':
            return {
                ...state,
                data: action.payload
            };
        case 'LIKE_POST_SUCCESS':
            return {
                ...state,
                data: action.payload

            };
        case 'DISLIKE_POST_SUCCESS':
            return {
                ...state,
                data: action.payload

            };
        case 'LIKE_POST_FAIL':
        case 'DISLIKE_POST_FAIL': {
            if (action.payload.status === 403)
                alert('Вы не авторизованы!');
            return state;
        }

        default:
            return state;
    }
}
