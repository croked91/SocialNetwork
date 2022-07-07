import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { PostType} from '../../redux/store' 
import { ProfileActionTypes } from '../../redux/profileReducer';




type ProfileTypeProps = {
  title: String
  state: { posts: PostType[]; newPostText: string}
 
}

const Profile = (props:ProfileTypeProps) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPosts state={props.state}/>
    </div>
  )
}

export default Profile;