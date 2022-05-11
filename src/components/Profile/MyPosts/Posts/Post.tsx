import s from './Post.module.css'

type PostType = {
  message: string
  likes: number
  id: number
}


const Post = (props:PostType) => {
  return <div className={s.item} >
    <img src='./ava.jpg' />
    <div className={s.text}>{props.message}</div>
    <div>
      <button className={s.button}>{props.likes}</button>
    </div>
  </div>
}

export default Post;