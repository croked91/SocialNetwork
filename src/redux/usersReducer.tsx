
type UserType = {
  id: number,
  followed: boolean,
  name: string,
  status: string,
  location: {
    city: string,
    country: string,
  }
}

type UsersReducerType = {
  users: UserType[]
}

type FollowFriendType = ReturnType<typeof followFriend>
type UnFollowFriendType = ReturnType<typeof unFollowFriend>

type UsersReduserActionType = FollowFriendType | UnFollowFriendType

const FOLLOW_FRIEND = "FOLLOW_FRIEND"
const UNFOLLOW_FRIEND = "UNFOLLOW_FRIEND"



const initialState = {
  users: [
    { id: 1, followed: false, name: "Vasya", status: "badss", location: {city: "Ufa", country: "Russia "} },
    { id: 2, followed: false, name: "Petya", status: "badss", location: {city: "Ufa", country: "Russia "} },
    { id: 3, followed: true, name: "Misha", status: "badss", location: {city: "Ufa", country: "Russia "} },
    { id: 4, followed: true, name: "Grisha", status: "badss", location: {city: "Ufa", country: "Russia "} },
  ],
}

export const usersReducer = (state: UsersReducerType = initialState, action: UsersReduserActionType) => {
  switch (action.type) {
    case FOLLOW_FRIEND:
      return state;
    case UNFOLLOW_FRIEND:
      return;
    default:
      return state;
  }
}



export const followFriend = () => ({
  type: FOLLOW_FRIEND,
  payload: {} 
} as const)

export const unFollowFriend = () => ({
  type: UNFOLLOW_FRIEND,
  payload: {} 
} as const)


