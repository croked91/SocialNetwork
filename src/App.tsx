import './App.css';
import Header from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { Outlet, Route, Routes } from 'react-router-dom';
import { StoreType } from './redux/store';
import { ReduxStoreType } from './redux/redux-store';



export type AppPropsType = {
  store: ReduxStoreType
}


const App = (props: AppPropsType) => {
  let state = props.store
  return (
    <div className='app-wriper'>
      <Header />
      <Navbar state={state.sidebar} />
      <Routes>
        <Route path='/' element={<div className='app-wriper-content'> <Outlet /> </div>} />
        <Route path='dialogs/*' element={<Dialogs title='Dialogs' state={state.dialogsPage} dispatch={props.store.dispatch.bind(props.store)}/>} />
        <Route path='profile' element={<Profile title='Profile' state={state.profilePage} dispatch={props.store.dispatch.bind(props.store)}/>} />
      </Routes>
    </div>
  )
}



export default App;
