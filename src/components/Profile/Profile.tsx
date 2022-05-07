import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

type ProfileTypeProps = {
  title: String
}

const Profile: React.FC<ProfileTypeProps> = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}

export default Profile;