import React from 'react';
import { Link } from 'react-router-dom';
// import { Menu, Icon, Button } from "antd";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

// const SubMenu = Menu.SubMenu;

const LinkComp2 = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Root</Link>
          {/* <Button type="primary">Primary</Button> */}
          <Button variant="contained" color="primary">
            你好，世界
          </Button>
        </li>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">Users</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

const classes = {
  root: {
    display: 'flex'
    // width: "300px"
  }
};

const LinkComp = () => {
  return (
    <div style={classes.root}>
      <Paper>
        <MenuList>
          <MenuItem>
            <Link to="/">Root</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/home">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/user">User</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/about">About</Link>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
};
export default LinkComp;
