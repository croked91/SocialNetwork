import s from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = () => {
  return (
    <div className={s.postBlocks}>
      <h1>My posts</h1>
      <h3>New post</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button className={s.button}>Publish post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, it's my second post" likes={15} />
        <Post message="Hi, it's my first post" likes={20} />
      </div>
    </div>
  )
}

export default MyPosts; 