import actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case actionTypes.GET_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
