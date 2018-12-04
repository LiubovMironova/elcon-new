export const POST_TYPES = {
  FETCH_POSTS_START: 'FETCH_POSTS_START',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR: 'FETCH_POSTS_ERROR'
};

export const fetchPostsStartAC = () => ({
  type: POST_TYPES.FETCH_POSTS_START
});

export const fetchPostsSuccessAC = posts => ({
  type: POST_TYPES.FETCH_POSTS_SUCCESS,
  payload: {
    posts
  }
});

export const fetchPostsErrorAC = () => ({
  type: POST_TYPES.FETCH_POSTS_ERROR
});
