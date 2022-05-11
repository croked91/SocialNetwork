import s from './MyPosts.module.css'
import Post from './Posts/Post';


type PostDataType = {

  post: string
  likes: number
}


let postData = [
  { id: 1, post: "Hi, it's my first post", likes: 15 },
  { id: 2, post: "Hi, it's my second post", likes: 20 },
  { id: 2, post: "Hi, it's my third post", likes: 24 },
]

let postsData =
  postData
    .map(el => (<Post id={el.id} message={el.post} likes={el.likes} />))

const MyPosts = () => {
  return (
    <div className={s.postBlocks}>
      <h1>My posts</h1>
      <h3>New post</h3>
      <div>
        <textarea></textarea>
      </div>
      <div className={s.posts}>
        {postsData}
      </div>
      <div>
        <button className={s.button}>Publish post</button>
      </div>

    </div>
  )
}

export default MyPosts; 