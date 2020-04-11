import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from './actions'
import style from './style.css'
import Modal from 'src/components/modal'
import Input from "../../components/input";

class User extends Component {


    componentDidMount() {
        const {match} = this.props;
        this.props.getUserAction(match.params.id);
    }
    onClick = () => {
        let {isShownModal, changeModal} = this.props;
        changeModal ( isShownModal);
    };
    onSubmit = () => {
        const {currentPassword, newPassword} = this.props;
        this.props.changePasswordAction(currentPassword, newPassword);
    };


    render() {

        const {data, isShownModal, errors} = this.props;

        let signDate = data && data.registrationDate;
        let parseDate = new Date(Date.parse(signDate));
        let day = parseDate.getDate();
        let month = parseDate.getMonth();
        let year = parseDate.getFullYear();
        let regDate = day + '.' + month + '.' + year;
        return (
            <div id='login'>
                {data
                    ?
                    <div className={style.Wrapper}>
                        <div className={style.imgWrapper}>
                            <div className={style.login}>{data.login}</div>
                            <img src={`http://school-blog.ru/images/${data.avatar}`}/>
                        </div>
                        <div className={style.textWrapper}>
                            <div className={style.rowWrapper}>
                                <div className={style.row}>Имя:</div>
                                <div className={style.rowVal}>{data.firstName}</div>
                            </div>
                            <div className={style.rowWrapper}>
                                <div className={style.row}>Фамилия:</div>
                                <div>{data.lastName}</div>
                            </div>
                            <div className={style.rowWrapper}>
                                <div className={style.row}>Отчество:</div>
                                <div> {data.patronymic}</div>
                            </div>
                            <div className={style.rowWrapper}>
                                <div className={style.row}>E-mail:</div>
                                <div>{data.email}</div>
                            </div>
                            <div className={style.rowWrapper}>
                                <div className={style.row}>Дата регистрации:</div>
                                <div>{regDate}</div>
                            </div>
                            <div className={style.rowWrapper}>
                                <div className={style.row}>Количество постов:</div>
                                <div>{data.postsCount}</div>
                            </div>
                            <div className={style.rowWrapper}>
                                <div className={style.row}>Количество поставленных лайков:</div>
                                <div>{data.likesCount}</div>
                            </div>
                            <div className={style.rowWrapper}>
                                <div className={style.row}>Количество поставленных дизлайков:</div>
                                <div>{data.dislikesCount}</div>
                            </div>
                            <button className={style.submit} onClick={this.onClick}>Изменить пароль</button>
                        </div>
                        {
                            isShownModal &&  <Modal
                                oldId = 'currentPassword'
                                newId = 'newPassword'
                                valueOld={this.props.currentPassword}
                                valueNew = {this.props.newPassword}
                                onChange={this.props.changeFieldAction}
                                closeModal={this.onClick}
                                submitModal = {this.onSubmit}
                                errorOldPass={this.props.errors.oldPass}
                                errorNewPass={this.props.errors.newPass}
                            />
                        }

                    </div>

                    : <div>loading...</div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.userPage.data,
        isShownModal: state.userPage.isShownModal,
        currentPassword: state.userPage.currentPassword,
        newPassword: state.userPage.newPassword,
        errors: state.userPage.errors
       // password: state.userPage.password
    };
}

export default connect(mapStateToProps, Actions)(User);


