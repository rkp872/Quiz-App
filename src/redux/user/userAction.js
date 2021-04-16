import { SET_USER_DATA } from "../ActionTypes"

export const SET_USER_DATA_ACTION = (payload) => {
    return {
        type: SET_USER_DATA,
        payload: payload
    }
}