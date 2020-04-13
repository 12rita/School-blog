import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './actions';
import Post from "../../components/post";

class PostPage extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.getPostDataAction(match.params.id);
  }
  like = (id) => {

    this.props.likePostAction(id);
  };

  dislike = (id) => {

    this.props.dislikePostAction(id);
  };

  render() {
    const { data } = this.props;
    return (
      <div>
        {data
            ?
            <Post
                id = {data.id}
                title = {data.title}
                content = {data.content}
                like = {this.like}
                dislike = {this.dislike}
                likesCount = {data.likesCount}
                dislikesCount = {data.dislikesCount}
                viewsCount = {data.viewsCount}
                relLikes = {data.relatedLikes}
                relDislikes = {data.relatedDislikes}
            />
          : <div>loading...</div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.post.data
  };
}

export default connect(mapStateToProps, Actions)(PostPage);
