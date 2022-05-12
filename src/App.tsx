import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Message } from './components/Dialogs/Messages/MessagesItem';
import { DialogItem } from './components/Dialogs/DialogItem/DialogsItem';
import Post from './components/Profile/MyPosts/Posts/Post';


let messagesData = [
  { id: 1, name: "Hi" },
  { id: 2, name: "How are you" },
  { id: 3, name: "It's paw paw buggie" },
  { id: 4, name: "It's paw paw buggie" },
  { id: 5, name: "It's paw paw buggie" },
  { id: 6, name: "It's paw paw buggie" },
  { id: 7, name: "It's paw paw buggie " }
]

let newMessagesData = messagesData.map(message => <Message key={message.id.toString()} title={message.name} id={message.id} />)

let dialogsData = [
  { id: 1, name: "Egor" },
  { id: 2, name: "Kolya" },
  { id: 3, name: "Kuprovskiy" },
  { id: 4, name: "Albina" },
  { id: 5, name: "Tolyan" },
  { id: 6, name: "MehmetIbnAbdul" },
  { id: 7, name: "Viktor " }
]

let newDialogsData = dialogsData.map(name => <DialogItem id={name.id} title={name.name} />)


let postData = [
  { id: 1, post: "Hi, it's my first post", likes: 15 },
  { id: 2, post: "Hi, it's my second post", likes: 20 },
  { id: 2, post: "Hi, it's my third post", likes: 24 },
]

let postsData = postData.map(el => (<Post id={el.id} message={el.post} likes={el.likes} />))


function App() {

  return (
    <div className='app-wriper'>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<div className='app-wriper-content'> <Outlet /> </div>} />
        <Route path='dialogs/*' element={<Dialogs title='Dialogs' newMessagesData={newMessagesData} newDialogsData={newDialogsData} />} />
        <Route path='profile' element={<Profile title='Profile' postData={postsData} />} />
      </Routes>
    </div>
  )
}



export default App;
