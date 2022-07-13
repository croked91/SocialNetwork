import s from './MyPosts.module.css'
import React from 'react'
import Post from '../MyPosts/Posts/Post';
import { PostType, } from '../../../redux/store'
import { addPostAC, updateNewPosttAC } from '../../../redux/profileReducer';
import { useDispatch } from 'react-redux';



type PostDataType = {
  state: { posts: PostType[]; newPostText: string }
  onClickHandler: ()=>void
  onPostChange: (newPostElement: string) => void
}



const MyPosts = (props: PostDataType) => {
  
  let postsData = props.state.posts.map(post => (
  <Post 
    id={post.id} 
    message={post.post} 
    likes={post.likes} 
  />))


  return (
    <div className={s.postBlocks}>
      <h1>My posts</h1>
      <h3>New post</h3>
      <div>
        <input
          value={props.state.newPostText}
          onChange={e => props.onPostChange(e.currentTarget.value)}
        />
        <button onClick={props.onClickHandler} className={s.button}>Publish post</button>
      </div>
      <div className={s.posts}>
        {postsData}
      </div>
    </div>
  )
}

export default MyPosts; 