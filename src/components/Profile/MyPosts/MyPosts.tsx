import s from './MyPosts.module.css'
import Post from './Posts/Post';


type PostDataType = {

  post: string
  likes: number
}


let postData = [
  { id: 1, post: "Hi, it's my first post", likes: 15 },
  { id: 2, post: "Hi, it's my second post", likes: 20 },
]



const MyPosts = () => {
  return (
    <div className={s.postBlocks}>
      <h1>My posts</h1>
      <h3>New post</h3>
      <div>
        <textarea></textarea>
      </div>
      <div className={s.posts}>
        <Post id={postData[0].id} message={postData[0].post} likes={postData[0].likes} />
        <Post id={postData[0].id} message={postData[0].post} likes={postData[0].likes} />
      </div>
      <div>
        <button className={s.button}>Publish post</button>
      </div>

    </div>
  )
}

export default MyPosts; 