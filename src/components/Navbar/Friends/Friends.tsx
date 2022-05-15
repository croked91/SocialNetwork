import { FriendsType, FriendType } from '../../../App'
import { FriendBlock } from './FriendBlock/FriendBlock'
import s from '../Navbar.module.css'

type FriendsComponentsType = {
    state: FriendsType
    blockTitle: string
}



export const Friends = (props:FriendsComponentsType) => {
let threeFriends = props.state.friendsList.filter(friend => friend.id <= 3)
let threeMapFriends = threeFriends.map(friend => (<FriendBlock name={friend.name} ava={friend.avaSourse} />))
    console.log(threeMapFriends);
    
return(
        <div>
            <div className={s.friendTitle}>{props.state.blockTitle}</div>
            <div className={s.parentFriends}>{threeMapFriends}</div>
        </div>
    )
}