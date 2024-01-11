import { createStore, combineReducers, applyMiddleware} from 'redux' ;
import {thunk} from 'redux-thunk' ;
import { composeWithDevTools} from '@redux-devtools/extension'
import { loadJobReducer, loadJobSingleReducer } from './reducers/jobReducer';
import { loadJobTypeReducer } from './reducers/jobTypeReducer';
import { allUserReducer, userReducerLogout, userReducerProfile, userReducerSignIn } from './reducers/userReducer' ;

// COMBINE REDUCERS
const reducer = combineReducers({
    loadJobs    : loadJobReducer,
    jobType     : loadJobTypeReducer,
    signIn      : userReducerSignIn,
    logOut      : userReducerLogout,
    userProfile : userReducerProfile,
    singleJob   : loadJobSingleReducer,
    // userJobApplication : userApplyJobReducer
    allUser     : allUserReducer
})

// INITIAL STATE
let intialState = {
    signIn :{
        userInfo : localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')) : null 
    }
} ;
const middleware = [thunk] ;
const store = createStore(reducer, intialState, composeWithDevTools(applyMiddleware(...middleware))) ;


export default store ;
