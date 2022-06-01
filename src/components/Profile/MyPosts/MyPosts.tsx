import s from './MyPosts.module.css'
import React, { useState } from 'react'
import { PostType } from '../../../App'
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


  // const [postText, setPostText] = useState<PostTextType>({ id: 1, post: '', likes: 0 })


  let newPostElement = React.createRef<HTMLInputElement>()

  // const onChangeHandler = (e: string) => {
  //   setPostText({ id: 0, post: e, likes: 0 })
  // }


  const onClickHandler = (postText: PostTextType) => {
    props.addPost(postText)
  }

  let postsData = props.state.posts.map(post => (<Post id={post.id} message={post.post} likes={post.likes} />))

  return (
    <div className={s.postBlocks}>
      <h1>My posts</h1>
      <h3>New post</h3>
      <div>
      {/* onChange={(event) => onChangeHandler(event.currentTarget.value)} */}
        <input ref={newPostElement} value={newPostElement.current?.value}></input>
        <button onClick={() => onClickHandler({id: 1, post: newPostElement.current?.value || '', likes: 0})} className={s.button}>Publish post</button>
      </div>
      <div className={s.posts}>
        {postsData}
      </div>
    </div>
  )
}

export default MyPosts; 