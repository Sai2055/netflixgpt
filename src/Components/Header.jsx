import React from 'react'
import { auth } from '../Utility.js/Firebase';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((store)=>store.user )
  const navigate = useNavigate()
  function handleSignOut(){
    const auth = getAuth();
signOut(auth).then(() => {
  navigate("/") // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }
  return (
    <div className='bg-gradient-to-b from-black to-transperant h-20 w-full z-10 flex justify-between absolute' >
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" className=' w-30 my-6 mx-12 '/>
      {user&&<div className='flex p-4 '>
        <img className='w-12 h-12' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" />
        <span className='pl-4 text-white pt-2.5'onClick={handleSignOut}>Sign Out</span>
      </div>}
    </div>
    
  )
}

export default Header
