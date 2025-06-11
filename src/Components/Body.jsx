import { useEffect } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Utility.js/Firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../Utility.js/UserSlice'

export default function Body () {
  const dispatch = useDispatch()
  useEffect(()=>{
    
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid, email, displayName} = user;
    dispatch(addUser({uid:uid, email:email, displayName:displayName}))
    // ...
  } else {
    // User is signed out
    // ...
    dispatch(removeUser())
  }
});
  },[])
    
  return (
    <div>
      <Outlet/>
      

      
    </div>
  )
}

