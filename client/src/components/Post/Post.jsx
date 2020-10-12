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
import { isEmpty } from "ramda";
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
          {isEmpty(user.avatar) && user.name[0]}
        </Avatar>
      }
      title={user.name}
      classes={{
        content: classes.content,
      }}
    />
    <CardMedia className={classes.media} image={media} />
    {!isEmpty(description) && (
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    )}

    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
    </CardActions>
  </Card>
);

export default withStyles(PostStyle)(Post);
