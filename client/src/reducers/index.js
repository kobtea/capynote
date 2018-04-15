import {combineReducers} from 'redux';

export const note = (state = {}, action) => {
    switch (action.type) {
        case 'LIST_NOTES':
            return {
                notes: ["one", "two", "three", "four"]
            };
        default:
            return state;
    }
};

export default combineReducers({
    note,
});
