import React from "react";
import { Card, CardHeader, CardMedia } from "@material-ui/core";

const Post = ({ title, media }) => (
  <Card>
    <CardHeader title={title} />
    <CardMedia image={media} />
  </Card>
);

export default Post;
