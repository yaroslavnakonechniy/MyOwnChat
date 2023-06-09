import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Messages from './components/Messages/Messages';
import Music from './components/Music/Music';
import Foto from './components/Foto/Foto';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UserContainer from './components/User/UserContainer';
import Wer from './components/Wer/Wer';
import Login from './components/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom";




const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>

            <Route path='/profile/:userId?' element={<ProfileContainer />}/>

            <Route path='/dialogs' element={<DialogsContainer />}/>
            <Route path='/user' element={<UserContainer />}/>

            <Route path='/messages' element={<Messages />}/>
            <Route path='/news' element={<News />}/>
            <Route path='/music' element={<Music />}/>
            <Route path='/foto' element={<Foto />}/>
            <Route path='/wer' element={<Wer />}/>
            <Route path='/login' element={<Login />}/>
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}




export default App;
