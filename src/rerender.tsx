import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StateType, addPost, updateNewPostText } from './redux/state';






export const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
      </BrowserRouter>,
      document.getElementById('root')
    );
    
}
