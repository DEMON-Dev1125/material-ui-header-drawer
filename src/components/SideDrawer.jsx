import * as React from "react";
import { useState } from "react";

import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
});

const SideDrawer = () => {
  const classes = useStyles();
  const navLinks = [
    { title: `about us`, path: `/about-us` },
    { title: `product`, path: `/product` },
    { title: `blog`, path: `/blog` },
    { title: `contact`, path: `/contact` },
    { title: `faq`, path: `/faq` },
  ];
  const [state, setState] = useState({ top: false }); // Add this

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ [anchor]: open });
  };

  const sideDrawerList = (anchor) => (
    <div
      className={classes.list} /*Add this */
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {navLinks.map(({ title, path }) => (
          <a href={path} key={title} className={classes.linkText} /*Add this*/>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("top", true)}
      >
        <Menu fontSize="large" style={{ color: `white` }} />
      </IconButton>
      <Drawer
        anchor="top"
        open={state.top}
        onOpen={toggleDrawer("top", true)}
        onClose={toggleDrawer("top", false)}
      >
        {sideDrawerList("top")}
      </Drawer>
    </React.Fragment>
  );
};

export default SideDrawer;
