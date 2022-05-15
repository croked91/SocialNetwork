import { NavLink } from 'react-router-dom'
import s from '../Navbar.module.css'
import { SideItemType } from '../../../App';

export const Path = (props:SideItemType) => {
    return (
      <div className={s.item} >
        <img src={props.icon} />
        <NavLink to={"/" + props.title} className={({ isActive }) => (isActive ? s.active : '')}> {props.title} </NavLink>
      </div>
    )
  }

