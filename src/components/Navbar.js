import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/slices/userSlice'

const Navbar = () => {
    const {isAuth}=useSelector(state=>state.user)
    const dispatch=useDispatch()
    return (
    <div>
        {isAuth?(
        <>
            <Link to="/profile">profile</Link>
            <button onClick={()=>
           dispatch(logout())
            }>Logout</button>
            </>
            ) : (
            <>
            <Link to="/Login">login</Link>
            <Link to="/Register">Register</Link>
            </>
        )}
    </div>
)
}

export default Navbar
