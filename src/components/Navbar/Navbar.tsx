import s from './Navbar.module.css'
import { Path } from './Path/Path';
import { SideItemType, FriendsType } from '../../App';
import { Friends } from './Friends/Friends';

type NavbarType = {
  state: { sideItems: SideItemType[]; friends: FriendsType}
}



export const Navbar = (props: NavbarType) => {
  let sideData = props.state.sideItems.map(el => (<Path id={el.id} icon={el.icon} title={el.title} />))
  return <nav className={s.navbarParent}>
    <div className={s.navbar}>{sideData}</div>
    <div className={s.frfr}>
    <Friends blockTitle={props.state.friends.blockTitle} state={props.state.friends}/>
    </div>
  </nav >
}



