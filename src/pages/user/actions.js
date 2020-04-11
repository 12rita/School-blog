import API from 'src/api'
import {push} from "connected-react-router";

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
export const changeModal = (isShown) => {
   return  {type:"CHANGE_MODAL", payload: !isShown};
}

export const changeFieldAction = ({fieldId, value}) => ({
    type: 'MODAL_CHANGE_DATA_FORM',
    payload: {fieldId, value}
});

export const changePasswordAction = (oldPass, newPass) => {
    return async function(dispatch) {
        try {

            if ( newPass.length<3){
                dispatch({ type: 'CHANGE_PASSWORD_FAIL_NEW_LENGTH', payload: 'Пароль слишком короткий', id: 'newPass'});
            }
            dispatch({type: 'CHANGE_PASSWORD_REQUEST'});
            const response = await API.user.changePassword(oldPass, newPass);
            if (response.data.error){
                dispatch({ type: 'CHANGE_PASSWORD_FAIL_CURR_PASS', payload: 'Текущий пароль неверный', id: 'oldPass'});
            }
            else
            dispatch({ type: 'CHANGE_PASSWORD_SUCCESS', payload: response.data });

        }
        catch (error) {
            dispatch({ type: 'CHANGE_PASSWORD_FAIL'});
        }
    }
};