import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const drawerWidth = 240;
const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
});

class Nav extends React.Component {
    componentWillMount() {
        this.props.onMount();
    }

    render() {
        const {classes, notes} = this.props;
        return (
            <Drawer variant={"permanent"} classes={{paper: classes.drawerPaper}}>
                <div className={classes.toolbar}/>
                <List>
                    {notes.map(note => (
                        <ListItem key={note} button>
                            <ListItemText primary={note}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
            </Drawer>
        );
    }
}

Nav.propTypes = {
    classes: PropTypes.shape({
        drawerPaper: PropTypes.string.isRequired,
        toolbar: PropTypes.string.isRequired,
    }).isRequired,
    notes: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,
    onMount: PropTypes.func.isRequired,
};

Nav.defaultProps = {
    notes: []
};

export default withStyles(styles)(Nav);
