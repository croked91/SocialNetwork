import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { PostType} from '../../redux/types' 
import { ProfileActionTypes } from '../../redux/profileReducer';
import { MyPostContainer } from './MyPosts/MyPostsContainer';




type ProfileTypeProps = {
  title: String
  state: { posts: PostType[]; newPostText: string}
 
}

const Profile = (props:ProfileTypeProps) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPostContainer />
    </div>
  )
}

export default Profile;