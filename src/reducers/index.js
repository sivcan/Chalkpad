import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
// import EmployeeFormReducer from './EmployeeFormReducer';
// import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
    auth: AuthReducer,
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
    // employeeForm: EmployeeFormReducer,
    // employees: EmployeeReducer
});

// auth and employeeForm are pieces of state.
