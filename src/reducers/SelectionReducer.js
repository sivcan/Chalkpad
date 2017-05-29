export default (state = null, action) => {
    console.log(action);
    switch (action.type) {
        case 'select_library' :
            return action.payload;
        default:
            return state;
    }
};

// Redux is set that, if we return an undefined object then redux
// gives error.
// Thus, we need to return null.

// A reducer is always called with a state and an action as the arguments.
