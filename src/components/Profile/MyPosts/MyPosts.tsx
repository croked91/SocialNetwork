import s from './MyPosts.module.css'


type PostDataType = {
  postData: object
}



const MyPosts = (props: PostDataType) => {
  return (
    <div className={s.postBlocks}>
      <h1>My posts</h1>
      <h3>New post</h3>
      <div>
        <textarea></textarea>
      </div>
      <div className={s.posts}>
        {props.postData}
      </div>
      <div>
        <button className={s.button}>Publish post</button>
      </div>

    </div>
  )
}

export default MyPosts; 