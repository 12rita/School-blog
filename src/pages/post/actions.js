import API from 'src/api';

export const getPostDataAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'POST_PAGE_GET_DATA_REQUEST' });
      const response = await API.posts.getPostById(id);
      dispatch({ type: 'POST_PAGE_GET_DATA_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'POST_PAGE_GET_DATA_FAIL' });
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