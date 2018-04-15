import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
});

function Header({classes}) {
    return (
        <AppBar position={"absolute"} className={classes.appBar}>
            <Toolbar>
                <Typography variant={"title"} color={"inherit"} noWrap>
                    capynote
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    classes: PropTypes.shape({
        appBar: PropTypes.string.isRequired,
    }).isRequired,
};

export default withStyles(styles)(Header);
