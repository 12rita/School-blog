import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './style.css';


export default class Post extends Component {
    liked = () => {
        const {id, like} = this.props;
        like && like(id);


    };
    disliked = () => {
        const {id, dislike} = this.props;
        dislike && dislike(id);

    };

    render() {
        const {id, title, content, likesCount, dislikesCount, viewsCount, relLikes, relDislikes} = this.props;

        return (
            <div className={style.postWrapper}>
                <div className={style.postTitle}>
                    <Link className={style.linkTitle} to={`/post/${id}`}>{title}</Link>
                </div>
                <div className={style.postContent}>{content}</div>
                <div className={style.footer}>
                    <div className={style.wrapLike}>
                        <div id={id} onClick={this.liked} className={relLikes.length? style.heart :style.heartOff }/>
                        <div>{likesCount}</div>
                        <div id={id} onClick={this.disliked} className={relDislikes.length? style.dislike: style.dislikeOff}/>
                        <div>{dislikesCount}</div>
                    </div>
                    <div className={style.viewWrapper}> {viewsCount} <div className={style.eye}/></div>

                </div>









            </div>

        )
    }
}
