import s from './MyPosts.module.css'
import React, { useState } from 'react'
import { PostType } from '../../../App'
import Post from '../MyPosts/Posts/Post';
import { string } from 'prop-types';


type PostDataType = {
  state: { posts: PostType[]; newPostText:string }
  addPost: () => void
  updateNewPostText: (newText: string) => void
}




type PostTextType = {
  id: number
  post: string
  likes: number
}



  const MyPosts = (props: PostDataType) => {
  
  let newPostElement = React.createRef<HTMLInputElement>()

  const onClickHandler = () => {
    props.addPost()
   }

  let postsData = props.state.posts.map(post => (<Post id={post.id} message={post.post} likes={post.likes} />))

  return (
    <div className={s.postBlocks}>
      <h1>My posts</h1>
      <h3>New post</h3>
      <div>
        <input ref={newPostElement} value={props.state.newPostText} onChange={(e)=>props.updateNewPostText(e.currentTarget.value)}></input>
        <button onClick={() => onClickHandler()} className={s.button}>Publish post</button>
      </div>
      <div className={s.posts}>
        {postsData}
      </div>
    </div>
  )
}

export default MyPosts; 