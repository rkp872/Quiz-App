import { SET_USER_DATA } from "../ActionTypes";

const initState = {
    isLoggedIn: false,
    userProfileData: null,
    token: null,
}

export const UserReducer = (state = initState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                userProfileData: action.payload.userProfileData,
                token: action.payload.token,
            }

        default:
            return state
    }
}