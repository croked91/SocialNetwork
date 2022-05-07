import s from './Post.module.css'

type postType = {
  message: string
  likes: number
}


const Post: React.FC<postType> = (props) => {
  return <div className={s.item} >
    <img src='./ava.jpg' />
    <div className={s.text}>{props.message}</div>
    <div>
      <button className={s.button}>{props.likes}</button>
    </div>
  </div>
}

export default Post;