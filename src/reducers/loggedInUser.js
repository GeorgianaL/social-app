import actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  data: {
    name: "Maggie Watts",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
