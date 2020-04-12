import React, {Component} from 'react';
import style from './style.css';
import Input from "../input";


class Modal extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.modal}>
          <div>
              <Input
                  id = {this.props.oldId}
                  value={this.props.valueOld}
                  placeholder= 'Текущий пароль'
                  onChange={this.props.onChange}
                  error={this.props.errorOldPass}

              />
          </div>
            <div>
                <Input
                    id = {this.props.newId}
                    value={this.props.valueNew}
                    placeholder='Новый пароль'
                    onChange={this.props.onChange}
                    error={this.props.errorNewPass}
                />
            </div>
            <button className={style.button} onClick={this.props.submitModal}>Изменить</button>
          <button className={style.button} onClick={this.props.closeModal}>Закрыть</button>
        </div>
      </div>
    );
  }
}

export default Modal;