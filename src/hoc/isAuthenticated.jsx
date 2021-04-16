import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

function isAuthenticated(WrappedComponent) {
    return function (props) {
        const user = useSelector(state => state.user)
        return user.isLoggedIn ? <WrappedComponent {...props} /> : <Redirect to="/login" />
    }
}

export default isAuthenticated
