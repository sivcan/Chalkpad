import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: '\nAuthentication Failed\n', password: '', loading: false };
        default:
            return state;
    }
};

// VERY IMPORTANT NOTES :
//
// When we say :
// const state = {};
//
// const newState = state;
// Now, newState holds the pointer to state.
// That is this is CALL BY REFERENCE.
//
// Now, if we write :
// newState.color = 'red';
//
// That simply means that, state.color is now also 'red' and
// newState.color is also red.
//
// Therefore, for the reducer to update something,
// it checks if the previous state is '===' to the newState or not.
// Therefore, if write
// case EMAIL_CHANGED:
//     state.email = action.payload
//     return state;
//
// This is wrong because both the previous state and the new state hold
// the same value and thus redux is like,
// "Okay no state has been changed. So no update :)"
// It's actually the same object in the memory.

// Thus, the solution is :
//
// { ...state, email: action.payload };
//
// This means that,
// 1. Make a new object thus { }
// 2. Take all the properties of existing state and copy them to new object.
// 3. Define the email property by giving it a value of 'action.payload'
// 4. Toss it on top of whatever properties we have on that state.
// 5. Therefore brand new state has a different email value than
//      the old object.
// This is how redux will know that something has changed.
// Thus, we need to update.


// TRICK
// The line : { ...state, ...INITIAL_STATE, user: action.payload };
// This means that copy the state to another new object
// then reset the whole state in our reducer with the INITIAL_STATE
// then further set user: action.payload
// Nice trick!
