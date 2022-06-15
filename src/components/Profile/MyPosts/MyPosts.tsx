import s from './MyPosts.module.css'
import React from 'react'
import { PostType } from '../../../App'
import Post from '../MyPosts/Posts/Post';
import { ActionTypes } from '../../../redux/state'



type PostDataType = {
  state: { posts: PostType[]; newPostText: string }
  dispatch: (action: ActionTypes) => void
}

const MyPosts = (props: PostDataType) => {

  let newPostElement = React.createRef<HTMLInputElement>()

  const onClickHandler = () => {
    props.dispatch({ type: "ADD-POST" })
  }

  let postsData = props.state.posts.map(post => (<Post id={post.id} message={post.post} likes={post.likes} />))

  return (
    <div className={s.postBlocks}>
      <h1>My posts</h1>
      <h3>New post</h3>
      <div>
        <input
          ref={newPostElement}
          value={props.state.newPostText}
          onChange={(e) => props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value })} />
        <button onClick={() => onClickHandler()} className={s.button}>Publish post</button>
      </div>
      <div className={s.posts}>
        {postsData}
      </div>
    </div>
  )
}

export default MyPosts; 