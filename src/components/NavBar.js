import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const NavBar = () => (
  <AppBar position="static" className="navbar">
    <Toolbar variant="dense">
      <Typography variant="h6" className="white-color">
        <b>Notes App</b>
      </Typography>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">New Note</Link>
      </div>
    </Toolbar>
  </AppBar>
);

export default NavBar;
