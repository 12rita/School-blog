import API from 'src/api';

export const getPostsAction = () => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'MAIN_PAGE_GET_POSTS_REQUEST' });
      const response = await API.posts.getList({ offsetStep: 10, sort: 'new' });
      dispatch({ type: 'MAIN_PAGE_GET_POSTS_SUCCESS', payload: response.data })
    } catch(error) {
      dispatch({ type: 'MAIN_PAGE_GET_POSTS_FAIL' });
    }
  }
};


export const getScrollPostsAction = (NPosts) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'MAIN_PAGE_SCROLL_GET_POSTS_REQUEST' });
      const response = await API.posts.getList({ offset: NPosts, offsetStep: 1 });
      dispatch({ type: 'MAIN_PAGE_SCROLL_GET_POSTS_SUCCESS', payload: response.data })
    } catch(error) {
      dispatch({ type: 'MAIN_PAGE_SCROLL_GET_POSTS_FAIL' });
    }
  }
};

export const likePostAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'LIKE_POST_REQUEST' });
      const response = await API.posts.likePost(id);
      dispatch({ type: 'LIKE_POST_SUCCESS', payload: response.data })
    } catch(error) {
      dispatch({ type: 'LIKE_POST_FAIL' });
    }
  }
};

export const dislikePostAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'DISLIKE_POST_REQUEST' });
      const response = await API.posts.dislikePost(id);
      dispatch({ type: 'DISLIKE_POST_SUCCESS', payload: response.data })
    } catch(error) {
      dispatch({ type: 'DISLIKE_POST_FAIL' });
    }
  }
};