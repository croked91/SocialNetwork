import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPostAC, updateNewPosttAC } from "../../../redux/profileReducer";
import { ReduxStoreType } from "../../../redux/store";
import MyPosts from './MyPosts';





export const MyPostContainer = () => {
    const state = useSelector((state: ReduxStoreType)=>state)
    
    const dispatch = useDispatch()
  
    const onClickHandler = () => {
      dispatch(addPostAC())
    }
  
  
    let onPostChange = (newPostElement: string) => {
      let action = updateNewPosttAC(newPostElement)
      dispatch(action)
    }

    return (
        <MyPosts 
            state={state.profilePage}
            onClickHandler={onClickHandler}
            onPostChange={onPostChange}
        />
    )
}