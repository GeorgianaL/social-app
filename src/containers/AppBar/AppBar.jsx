import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { isEmpty } from "ramda";
import {
  AppBar as AppBarBase,
  Toolbar,
  Avatar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  withStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";

import AppBarStyle from "./AppBar.styles";

const AppBar = ({ classes, user }) => {
  return (
    <div className={classes.grow}>
      <AppBarBase position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Social App
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Avatar
                aria-label="recipe"
                className={classes.smallAvatar}
                src={user.avatar}
              >
                {isEmpty(user.avatar) && user.name[0]}
              </Avatar>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              //   aria-controls={mobileMenuId}
              aria-haspopup="true"
              //   onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBarBase>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.loggedInUser.data,
});

export default compose(
  connect(mapStateToProps, null),
  withStyles(AppBarStyle)
)(AppBar);
