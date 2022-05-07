import { Action } from 'history'
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { isPropertySignature } from 'typescript'
import s from './Navbar.module.css'
console.log(s)

type PathType = {
  title: string
  imgPath: string
}


const Path: React.FC<PathType> = (props) => {
  return (
    <div className={s.item} >
      <img src={props.imgPath} />
      <NavLink to={"/" + props.title} className={({ isActive }) => (isActive ? s.active : '')}> {props.title} </NavLink>
    </div>
  )
}

const Navbar = () => {
  return <nav className={s.navbar} >
    <Path imgPath="https://img.icons8.com/nolan/64/electronic-identity-card.png" title="Profile" />
    <Path imgPath="https://img.icons8.com/nolan/64/messages-mac.png" title="Dialogs" />
    <Path imgPath="https://img.icons8.com/nolan/64/news.png" title="News" />
    <Path imgPath="https://img.icons8.com/nolan/64/audio-wave.png" title="Music" />
    <Path imgPath="https://img.icons8.com/nolan/64/settings--v1.png" title="Settings" />
    <Path imgPath="https://img.icons8.com/nolan/64/gallery.png" title="Photos" />
  </nav >
}

export default Navbar;

{/* <NavLink to="/profile" className={s.active}  > Profile </NavLink> */ }