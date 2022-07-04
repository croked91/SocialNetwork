import { ActionTypes, PostType } from "./store";
export type ProfileActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPosttAC>;



const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_POST = "ADD-POST"

type ProfileReducerStateType =
  { posts: PostType[]; 
    newPostText: string }

export const profileReducer = (state: ProfileReducerStateType , action: ActionTypes) => {
   switch(action.type){
    case ADD_POST:
      let postMessage = {
        id: 5,
        post: state.newPostText,
        likes: 0
      }
      state.posts.push(postMessage)
      state.newPostText = ""
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state;
    default:
      return state;
   }
}

export const updateNewPosttAC = (newText: string) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText
} as const)

export const addPostAC = () => ({ type: ADD_POST } as const)

