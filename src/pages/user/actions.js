import API from 'src/api'

export const getUserAction = (id) => {
    return async function(dispatch) {
        try {
            dispatch({type: 'GET_USER_REQUEST'});
            const response = await API.user.getUser(id);
            dispatch({ type: 'GET_USER_SUCCESS', payload: response.data });
        }
        catch (error) {
            dispatch({ type: 'GET_USER_FAIL' });
        }
    }
};

