export type PostType = {
  id: number
  post: string
  likes: number
}

export type DialogType = {
  id: number
  name: string
  avaSourse: string
}

export type MessageType = {
  id: number
  name: string
  authorId: number
}

export type MessagesType = {
  user: string
  message: MessageType[]
  newMessageBody: string
}

export type SideItemType = {
  id: number
  title: string
  icon: string
}

export type FriendsType = {
  blockTitle: string,
  friendsList: FriendType[]
}

export type FriendType = {
  id: number
  name: string
  avaSourse: string
}

