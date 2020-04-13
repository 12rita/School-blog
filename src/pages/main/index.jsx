import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from './actions';
import style from './style.css';
import Post from "../../components/post";

class MainPage extends Component {
    componentDidMount() {
        this.props.getPostsAction();
        window.addEventListener('scroll', this.onScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        const { posts, isLoadingPosts } = this.props;
        const postsLength = posts.length;
        const windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

        if(windowRelativeBottom <= document.documentElement.clientHeight + 100 && !isLoadingPosts) {
            this.props.getScrollPostsAction(postsLength)
        }
    };

    like = (id) => {
        this.props.likePostAction(id);

    };

    dislike = (id) => {
        this.props.dislikePostAction(id);
    };


    render() {
        const {posts} = this.props;

        return (
            <div className={style.postList}>
                {posts.map((postItem) => {
                    return (
                        <Post
                            key = {postItem.id}
                            id = {postItem.id}
                            title = {postItem.title}
                            content = {postItem.content}
                            likesCount = {postItem.likesCount}
                            dislikesCount = {postItem.dislikesCount}
                            viewsCount = {postItem.viewsCount}
                            relLikes = {postItem.relatedLikes}
                            relDislikes = {postItem.relatedDislikes}
                            like = {this.like}
                            dislike = {this.dislike}
                        />
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.main.posts,
        isLoadingPosts: state.main.isLoadingPosts
    };
}

export default connect(mapStateToProps, Actions)(MainPage);
