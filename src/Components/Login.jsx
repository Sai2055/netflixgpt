
  import { useState, useRef } from 'react'
  import Header from './Header'
  import validateForm from '../Utility.js/Formvalidation'
  import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
  import { auth } from '../Utility.js/Firebase';
  import { Navigate } from 'react-router-dom';
  import { useNavigate } from 'react-router-dom';
  import Browse from './Browse';

  const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate()

    const emailref = useRef(null);
    const passwordref = useRef(null);
    
    const HandleError = () =>{
      const message = validateForm(emailref.current.value, passwordref.current.value)
      setErrorMessage(message)

      if(message) return;
      if(!isSignInForm){
      
      createUserWithEmailAndPassword(auth, emailref.current.value, passwordref.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      navigate("/browse")
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      setErrorMessage(errorMessage+"-"+errorCode)
    });

    
      }else{
        signInWithEmailAndPassword(auth, emailref.current.value, passwordref.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      navigate("/browse")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorMessage+"-"+errorCode)
    });
      }
    }
        
    function toggleSignin(){
      setisSignInForm(!isSignInForm)
    }

    
    return (
      <div>
        <Header/>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs" alt="background-Img" className='absolute w-full' />      
        <form onSubmit = {(e)=>e.preventDefault()} className='absolute px-20 py-14 bg-black/80 w-4/12 h-auto mx-auto my-26 right-0 left-0'>
          <h1 className='text-3xl text-white font-bold  w-full pb-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          { !isSignInForm && <input type="text" name="" id="" placeholder='UserName' className='p-3 mt-2 bg-gray-700 text-white w-full'/>}
          <input type="email" name="" id="" placeholder='Email address' className='p-3 mt-4 mb-2 bg-gray-700 text-white w-full' ref={emailref}/>
          <input type="password" name="" id="" placeholder='PassWord' className='p-3 mt-2 mb-2 bg-gray-700 text-white w-full' ref={passwordref}/>
          <p className='text-red-600'>{errorMessage}</p>
          <button className='p-2 mt-2 mb-2 w-full text-white bg-red-700' onClick={HandleError}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='text-white my-6'onClick={toggleSignin}>{isSignInForm ? "New to Netflix?Sign up now." : 'Already Registered?Sign In'}</p>
        </form>
      </div>
    )
  }

  export default Login;
