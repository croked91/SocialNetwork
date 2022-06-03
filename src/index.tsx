
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StateType, addPost, updateNewPostText } from './redux/state';
import reportWebVitals from './reportWebVitals';
import { state, subscribe }  from './redux/state'





export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
          <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
      );
      
  }
  


subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
