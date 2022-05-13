import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { PostType } from '../../App'
import Post from './MyPosts/Posts/Post';



type ProfileTypeProps = {
  title: String
  state: { posts: PostType[]; }
}

const Profile = (props:ProfileTypeProps) => {
  let postsData = props.state.posts.map(post => (<Post id={post.id} message={post.post} likes={post.likes} />))
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={postsData}/>
    </div>
  )
}

export default Profile;