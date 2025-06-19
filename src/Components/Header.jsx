import React, { useEffect } from "react";
import { auth } from "../Utility.js/Firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utility.js/UserSlice";

const Header = () => {
  const User = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  return (
    <div className="bg-gradient-to-b from-black to-transperant h-20 w-full z-10 flex justify-between absolute">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt=""
        className=" w-30 my-6 mx-12 "
      />
      {User && (
        <div className="flex p-4 ">
          <img
            className="w-12 h-12"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt=""
          />
          <span className="pl-4 text-white pt-2.5" onClick={handleSignOut}>
            Sign Out
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
