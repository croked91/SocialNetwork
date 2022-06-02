import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { PostType } from '../../App'





type ProfileTypeProps = {
  title: String
  state: { posts: PostType[]; newPostText: string}
  addPost: () => void
  updateNewPostText: (newText: string) => void
}

const Profile = (props:ProfileTypeProps) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPosts state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </div>
  )
}

export default Profile;