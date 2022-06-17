import s from './MyPosts.module.css'
import React from 'react'
import Post from '../MyPosts/Posts/Post';
import { ActionTypes, addPostAC, PostType, updateNewPosttAC  } from '../../../redux/state'



type PostDataType = {
  state: { posts: PostType[]; newPostText: string }
  dispatch: (action: ActionTypes) => void
}



const MyPosts = (props: PostDataType) => {

  let newPostElement = React.createRef<HTMLInputElement>()

  const onClickHandler = () => {
    props.dispatch(addPostAC())
  }

  let postsData = props.state.posts.map(post => (<Post id={post.id} message={post.post} likes={post.likes} />))

  let onPostChange = () => {
    let text = newPostElement.current!.value
    let action = updateNewPosttAC(text)
    props.dispatch(action)
  }


  return (
    <div className={s.postBlocks}>
      <h1>My posts</h1>
      <h3>New post</h3>
      <div>
        <input
          ref={newPostElement}
          value={props.state.newPostText}
          onChange={onPostChange}
        />
        <button onClick={() => onClickHandler()} className={s.button}>Publish post</button>
      </div>
      <div className={s.posts}>
        {postsData}
      </div>
    </div>
  )
}

export default MyPosts; 