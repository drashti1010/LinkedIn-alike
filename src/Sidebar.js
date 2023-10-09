import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";
function Sidebar() {
  const user=useSelector(selectUser);

    const recentItem=(topic)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    ); 
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="new"
        />
        <Avatar className="sidebar__icon" src={user.photoURL} >{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,340</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,100</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('React.js')}
        {recentItem('Programming')}
        {recentItem('Software Developer')}
        {recentItem('Design')}
        {recentItem('Developer')}
      </div>
      
    </div>
  );
}

export default Sidebar;
