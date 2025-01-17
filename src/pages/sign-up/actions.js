import API from "src/api";
import {push} from 'connected-react-router';

export const changeFieldAction = ({fieldId, value}) => ({
    type: 'SIGN_UP_CHANGE_DATA_FORM',
    payload: {fieldId, value}
});

export const signUpAction = (dataForm) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'SIGN_UP_REQUEST'});
            const response = await API.user.signUp(dataForm);
            dispatch({type: 'SIGN_UP_SUCCESS', payload: response.data});
            dispatch(push('/'));
        } catch (error) {
            if (error.response) {
                dispatch({type: 'SIGN_UP_FAIL', payload: error.response.data});
            }
        }
    };
};
export function checkLoginAction(login) {
    return async function(dispatch) {
        try {
            const response = await API.user.checkLogin(login);
            dispatch({ type: 'SIGN_UP_CHECK_LOGIN_SUCCESS', payload: response.data });
        } catch (error) {

        }
    }
}
