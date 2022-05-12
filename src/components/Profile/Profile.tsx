import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

type ProfileTypeProps = {
  title: String
  postData: object
}

const Profile = (props:ProfileTypeProps) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={props.postData}/>
    </div>
  )
}

export default Profile;