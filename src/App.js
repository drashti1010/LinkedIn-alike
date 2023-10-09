import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
          dispatch(login({
            email:userAuth.email,
            displayName:userAuth.displayName,
            uid:userAuth.uid,
            photoUrl:userAuth.photoURL,
          }))
      }else{
        dispatch(logout());
      }
    })
  },[dispatch])
  return (
    <div className="app">
      <Header />

      {user ? (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
