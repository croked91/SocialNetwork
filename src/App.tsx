import './App.css';
import Header from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { Outlet, Route, Routes } from 'react-router-dom';
import { ReduxStoreType } from './redux/redux-store';
import { useSelector } from 'react-redux';
import { connect } from 'http2';
import { connectAdvanced } from 'react-redux';



export type AppPropsType = {
  store: ReduxStoreType
}


const App = () => {

  const state = useSelector((state: ReduxStoreType)=>state)

  const mapStateToProps = () => {

  }


  const i = connectAdvanced(mapStateToProps, mapDispatchToProps)(App)

  return (
    <div className='app-wriper'>
      <Header />
      <Navbar state={state.sidebar} />
      <Routes>
        <Route path='/' element={<div className='app-wriper-content'> <Outlet /> </div>} />
        <Route path='dialogs/*' element={<Dialogs title='Dialogs' state={state.dialogsPage}/>} />
        <Route path='profile' element={<Profile title='Profile' state={state.profilePage}/>} />
      </Routes>
    </div>
  )
}



export default App;
