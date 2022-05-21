import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { PostType } from '../../App'





type ProfileTypeProps = {
  title: String
  state: { posts: PostType[]; }
  addPost: (postMessage: PostType) => void
}

const Profile = (props:ProfileTypeProps) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPosts state={props.state} addPost={props.addPost}/>
    </div>
  )
}

export default Profile;