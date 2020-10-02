import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { Grid } from "@material-ui/core";
import Post from "../../components/Post";
import { getAllPosts } from "../../actions";

const Posts = ({ actions, loading, posts }) => {
  useEffect(() => {
    actions.getAllPosts();
  }, []);

  if (loading) {
    return <p>loading</p>;
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      {posts.map((post) => (
        <Grid item key={post.id}>
          <Post {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getAllPosts,
    },
    dispatch
  ),
});

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.data,
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Posts);
