import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { SET_USER_DATA_ACTION } from "./user/userAction";
import { UserReducer } from "./user/userReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

// combining reducers 
const reducer = combineReducers({
    user: UserReducer
})

// creating store
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)))



// Async Function for dispatching local storage date to redux
const GET_USER_DATA_FROM_LOCALSTORAGE = () => {
    return function (dispatch) {
        let userData = localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE)
        if (userData) {
            userData = JSON.parse(userData)
            dispatch(SET_USER_DATA_ACTION(userData))
        }
        else {
            dispatch(SET_USER_DATA_ACTION({
                isLoggedIn: false,
                userProfileData: null,
                token: null,
            }))
        }
    }
}
store.dispatch(GET_USER_DATA_FROM_LOCALSTORAGE())





export default store