import s from './ProfileInfo.module.css'



const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://photoshablon.com/_ph/23/668311152.jpg' alt='' />
      </div>
      <div className={s.descriptionblock}>
        Ava+Description
      </div>
    </div>
  )
}

export default ProfileInfo;