import './App.css';
import Header from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { Outlet, Route, Routes } from 'react-router-dom';


export type AppPropsType = {
  state: {
    sidebar: {
      sideItems: SideItemType[],
      friends: FriendsType
    }
    profilePage: { posts: PostType[] };
    dialogsPage: {
      dialogs: DialogType[];
      messages: MessagesType;
    };
  }
  addPost: (postMessage: PostType)=>void
}

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

const App = (props: AppPropsType) => {

  return (
    <div className='app-wriper'>
      <Header />
      <Navbar state={props.state.sidebar} />
      <Routes>
        <Route path='/' element={<div className='app-wriper-content'> <Outlet /> </div>} />
        <Route path='dialogs/*' element={<Dialogs title='Dialogs' state={props.state.dialogsPage} />} />
        <Route path='profile' element={<Profile title='Profile' state={props.state.profilePage} addPost={props.addPost}/>} />
      </Routes>
    </div>
  )
}



export default App;
