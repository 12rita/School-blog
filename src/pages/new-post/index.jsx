import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import Button from "../../components/button";
import Textarea from "../../components/textarea";
import * as Actions from './actions';
import style from './style.css'


class NewPost extends Component {
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
        createPostAction: PropTypes.func.isRequired
    };
    onSubmit = () => {
        const {dataForm} = this.props;
        this.props.createPostAction(dataForm);

    };


    render() {
        return (
            <div>
                <form className={style.postFormWrapper}>
                    <div className={style.row}>
                        <div>
                            <Input
                                id="title"
                                placeholder ='title'
                                value={this.props.dataForm.title}
                                onChange={this.props.changeFieldAction}
                            />
                        </div>
                    </div>
                    <div className={style.row}>
                        <div>
                            <Textarea
                                id="content"
                                placeholder = "content"
                                value={this.props.dataForm.content}
                                onChange={this.props.changeFieldAction}
                            />
                        </div>
                    </div>
                    <div className={style.row}>
                        <Button id="submit" onClick={this.onSubmit}>Создать</Button>
                    </div>
                </form>




            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dataForm: state.newPost.dataForm
});

export default connect(mapStateToProps, Actions)(NewPost);
