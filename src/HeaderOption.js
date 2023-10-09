import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./HeaderOption.css";

function HeaderOption({avatar, title, Icon, onClick}) {

  const user=useSelector(selectUser);
  return (
    <div className='headerOption' onClick={onClick}>
      {Icon && <Icon className='hraderOption__icon' />}
      {avatar && <Avatar className='hraderOption__icon' src={user?.photoUrl}>{user?.email[0]}</Avatar>}
      <h3 className='headeroption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption;
