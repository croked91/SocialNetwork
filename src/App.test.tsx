import { render, screen } from '@testing-library/react';
import App from './App';
import './index.css';
import { Message } from './components/Dialogs/Messages/MessagesItem';
import { DialogItem } from './components/Dialogs/DialogItem/DialogsItem';
import Post from './components/Profile/MyPosts/Posts/Post';
import { store }  from './redux/state'



let messagesData = [
  { id: 1, name: "Hi" },
  { id: 2, name: "How are you" },
  { id: 3, name: "It's paw paw buggie" },
  { id: 4, name: "It's paw paw buggie" },
  { id: 5, name: "It's paw paw buggie" },
  { id: 6, name: "It's paw paw buggie" },
  { id: 7, name: "It's paw paw buggie " }
]



let dialogsData = [
  { id: 1, name: "Egor" },
  { id: 2, name: "Kolya" },
  { id: 3, name: "Kuprovskiy" },
  { id: 4, name: "Albina" },
  { id: 5, name: "Tolyan" },
  { id: 6, name: "MehmetIbnAbdul" },
  { id: 7, name: "Viktor " }
]




let postData = [
  { id: 1, post: "Hi, it's my first post", likes: 15 },
  { id: 2, post: "Hi, it's my second post", likes: 20 },
  { id: 2, post: "Hi, it's my third post", likes: 24 },
]



test('renders learn react link', () => {
  <App store={store}/>
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
