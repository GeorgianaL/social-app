import actionTypes from "./actionTypes";
import { GET } from "../utils/axios";

export const getAllPosts = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_POSTS_PENDING,
  });

  return GET("/posts")
    .then((response) => {
      dispatch({
        type: actionTypes.GET_POSTS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.GET_POSTS_ERROR,
        error,
      });
    });
};
