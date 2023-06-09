import {React, useContext} from 'react'
import {signOut} from "firebase/auth"
import {auth} from "../firebase"
import {AuthContext} from "../context/AuthContext"
import { db } from "../firebase";
import { updateDoc, doc } from 'firebase/firestore';
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  
  return (
    <div className='navbar'>
      <span className="logo">Trans-Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button className='btn btn-logOut' onClick={()=>signOut(auth)}>Logout</button>
        {/* <button className='btn btn-burger '>|||</button> */}

      </div>
    </div>
  )
}

export default Navbar;