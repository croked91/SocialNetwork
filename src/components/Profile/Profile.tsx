import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { PostType} from '../../redux/store' 
import { ProfileActionTypes } from '../../redux/profileReducer';




type ProfileTypeProps = {
  title: String
  state: { posts: PostType[]; newPostText: string}
  dispatch: (action: ProfileActionTypes ) => void
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