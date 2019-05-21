/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
});

class Index extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>          
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              My App
            </Typography>
            <Link href='/about'>
              <Button>About</Button>
            </Link>
            <Button color="primary" variant="outlined">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);