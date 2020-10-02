import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  withStyles,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

import PostStyle from "./Post.styles";

const Post = ({ classes, description, media, user }) => (
  <Card className={classes.root}>
    <CardHeader
      avatar={
        <Avatar
          aria-label="recipe"
          className={classes.avatar}
          src={user.avatar}
        >
          {user.avatar === "" && user.name[0]}
        </Avatar>
      }
      title={user.name}
      classes={{
        content: classes.content,
      }}
    />
    <CardMedia className={classes.media} image={media} />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {description}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
    </CardActions>
  </Card>
);

export default withStyles(PostStyle)(Post);
