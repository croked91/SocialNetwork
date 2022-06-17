import { NavLink } from 'react-router-dom'
import { SideItemType } from '../../../redux/state'
import s from '../Navbar.module.css'


export const Path = (props:SideItemType) => {
    return (
      <div className={s.item} >
        <img src={props.icon} />
        <NavLink to={"/" + props.title} className={({ isActive }) => (isActive ? s.active : '')}> {props.title} </NavLink>
      </div>
    )
  }

