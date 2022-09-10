
type UserType = {
  "name": string,
  "id": number,
  "uniqueUrlName": string,
  "photos": {
    "small": string,
    "large": string
  },
  "status": string,
  "followed": boolean
}

export type UsersReducerType = {
  users: UserType[]
}

type FollowFriendType = ReturnType<typeof followFriend>
type UnFollowFriendType = ReturnType<typeof unFollowFriend>
type UnSetUsersType = ReturnType<typeof unSetUsers>
export type SetUsersType = ReturnType<typeof setUsers>

type UsersReduserActionType = FollowFriendType | UnFollowFriendType | SetUsersType | UnSetUsersType

const FOLLOW_FRIEND = "FOLLOW_FRIEND"
const UNFOLLOW_FRIEND = "UNFOLLOW_FRIEND"
const SET_USERS = "SET_USERS"
const UNSET_USERS = "UNSET_USERS"



const initialState = {
  users: [
  ],
}

export const usersReducer = (state: UsersReducerType = initialState, action: UsersReduserActionType) => {
  switch (action.type) {
    case FOLLOW_FRIEND:
      return {
        ...state, users: state.users.map(
          user => {
            if (user.id === action.payload.userId) {
              return { ...user, followed: true }
            }
            return user
          }
        )
      };
    case UNFOLLOW_FRIEND:
      return {
        ...state, users: state.users.map(
          user => {
            if (user.id === action.payload.userId) {
              return { ...user, followed: false }
            }
            return user
          }
        )
      }
    case SET_USERS:
      return {
        ...state, users: [...state.users, ...action.payload.users]
      }
    case UNSET_USERS:
      return {
        ...state, users: []
      }
    default:
      return state;
  }
}



export const followFriend = (userId: number) => ({
  type: FOLLOW_FRIEND,
  payload: { userId }
} as const)

export const unFollowFriend = (userId: number) => ({
  type: UNFOLLOW_FRIEND,
  payload: { userId }
} as const)

export const setUsers = (users: UserType[] ) => ({
  type: SET_USERS,
  payload: {users}
} as const)

export const unSetUsers = () => ({
  type: UNSET_USERS,
} as const)


