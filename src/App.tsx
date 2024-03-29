import './App.css';
import Header from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { Outlet, Route, Routes } from 'react-router-dom';
import { ReduxStoreType } from './redux/store';
import { useSelector } from 'react-redux';
import { Users } from './components/Users/Users';
import { useDispatch } from 'react-redux';



export type AppPropsType = {
  store: ReduxStoreType
}


const App = () => {

  const state = useSelector((state: ReduxStoreType)=>state)
  const dispatch = useDispatch()
  
  return (
    <div className='app-wriper'>
      <Header />
      <Navbar state={state.sidebar} />
      <Routes>
        <Route path='/' element={<div className='app-wriper-content'> <Outlet /> </div>} />
        <Route path='dialogs/*' element={<Dialogs title='Dialogs' state={state.dialogsPage}/>} />
        <Route path='profile' element={<Profile title='Profile' state={state.profilePage}/>} />
        <Route path='users' element={<Users dispatch={dispatch} state={state.userPage}/>} />
      </Routes>
    </div>
  )
}



export default App;
