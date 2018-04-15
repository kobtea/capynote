import {connect} from 'react-redux';
import Nav from '../components/Nav';
import * as actions from '../actions';

const mapStateToProps = state => ({
    notes: state.note.notes,
});

const mapDispatchToProps = dispatch => ({
    onMount: () => {
        dispatch(actions.ListNotes());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
