const initState = {
  posts: [],
  isLoadingPosts: false,

};

export default function mainReducer(state = initState, action) {
  switch (action.type) {
    case 'MAIN_PAGE_GET_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload
      };
    case 'MAIN_PAGE_SCROLL_GET_POSTS_REQUEST':
      return {
        ...state,
        isLoadingPosts: true
      };
    case 'MAIN_PAGE_SCROLL_GET_POSTS_SUCCESS':
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        isLoadingPosts: false
      };
    case 'MAIN_PAGE_SCROLL_GET_POSTS_FAIL':
      return {
        ...state,
        isLoadingPosts: false
      };
    case 'LIKE_POST_SUCCESS':
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post),

      };
    case 'DISLIKE_POST_SUCCESS':
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post),

      };
    default:
      return state;
  }
}
