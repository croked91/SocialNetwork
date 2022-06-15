import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { PostType } from '../../App'
import {ActionTypes} from '../../redux/state' 




type ProfileTypeProps = {
  title: String
  state: { posts: PostType[]; newPostText: string}
  dispatch: (action: ActionTypes ) => void
}

const Profile = (props:ProfileTypeProps) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPosts state={props.state} dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile;