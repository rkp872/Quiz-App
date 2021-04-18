import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import Navigation from '../Navigation/Navigation'
import Footer from "../Footer/Footer";
import Grid from "../Grid/Grid";
// import { SET_USER_DATA_ACTION } from '../../redux/user/userAction'

function Home() {

    // const user = useSelector(state => state.user)
    // console.log(user)

    // const dispatch = useDispatch()

    // dispatch(SET_USER_DATA_ACTION({
    //     isLoggedIn: true
    // }))

    // console.log(user)

    return (
        <div>
            <Navigation />
            <Grid/>
            <Footer/>
        </div>
    )
}

export default Home
