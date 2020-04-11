import API from "../../api";
import {push} from 'connected-react-router';

export const changeFieldAction = ({ fieldId, value }) => ({
        type: 'NEW-POST_CHANGE_DATA_FORM',
    payload: { fieldId, value }
});

export const createPostAction = (data) => {
    return async function(dispatch) {
        try {

            dispatch({ type: 'CREATE_NEW_POST_REQUEST' });
            const response = await API.posts.createPost(data);
            dispatch({ type: 'CREATE_NEW_POST_SUCCESS', payload: response.data });
            dispatch(push('/'));

        } catch(error) {
            dispatch({ type: 'CREATE_NEW_POST_FAIL' });
        }
    }
};
