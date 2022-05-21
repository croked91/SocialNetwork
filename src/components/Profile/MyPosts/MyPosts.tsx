import s from './MyPosts.module.css'
import React, { useRef, useState } from 'react'
import {PostType, MessageType} from '../../../App'
import Post from '../MyPosts/Posts/Post';

 
type PostDataType = {
  state: { posts: PostType[]; }
  addPost: (postMessage: PostType) => void
}




type PostTextType = {
  id: number
  post: string
  likes: number
}


const MyPosts = (props: PostDataType) => {
  

  const [postText, setPostText] = useState<PostTextType>()

  let newPostElement =  React.createRef<HTMLTextAreaElement>()
 
  let text = newPostElement.current?.value

  const onClickHandler = () => {
    setPostText({ id: 1, post: text, likes: 1 })
    props.addPost(postText)
  }

  let postsData = props.state.posts.map(post => (<Post id={post.id} message={post.post} likes={post.likes} />))
  
  return (
    <div className={s.postBlocks}>
      <h1>My posts</h1>
      <h3>New post</h3>
      <div>
        <textarea ref={newPostElement}>1212</textarea>
        <button onClick={onClickHandler} className={s.button}>Publish post</button>
      </div>
      <div className={s.posts}>
        {postsData}
      </div>
    </div>
  )
}

export default MyPosts; 