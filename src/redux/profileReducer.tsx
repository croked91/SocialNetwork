import { PostType } from "./types";



const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_POST = "ADD-POST"

export type ProfileActionTypes = UpdateNewPosttACType | AddPostACAC
type UpdateNewPosttACType = ReturnType<typeof updateNewPosttAC>
type AddPostACAC = ReturnType<typeof addPostAC>
type ProfileReducerStateType = {
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

export const profileReducer = (state: ProfileReducerStateType = initialState, action: ProfileActionTypes) => {
  switch (action.type) {
    case ADD_POST: {
      const postMessage = {
        id: 5,
        post: state.newPostText,
        likes: 0
      }
      return {
        ...state,
        posts: [...state.posts, postMessage],
        newPostText: ""
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    default:
      return state;
  }
}



export const updateNewPosttAC = (newText: string) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText
} as const)

export const addPostAC = () => ({ type: ADD_POST } as const)

