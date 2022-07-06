import { PostType } from "./store";



const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_POST = "ADD-POST"

export type ProfileActionTypes = UpdateNewPosttACType | AddPostACAC
type UpdateNewPosttACType = ReturnType<typeof updateNewPosttAC>
type AddPostACAC = ReturnType<typeof addPostAC>
type ProfileReducerStateType =
  {
    posts: PostType[];
    newPostText: string
  }

let initialState = {
  posts: [
    { id: 1, post: "Hi, it's my first post", likes: 15 },
    { id: 2, post: "Hi, it's my second post", likes: 20 },
    { id: 3, post: "Hi, it's my third post", likes: 24 },
  ],
  newPostText: ''
}

export const profileReducer = (state: ProfileReducerStateType = initialState , action: ProfileActionTypes) => {
  switch (action.type) {
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

