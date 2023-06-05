import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Messages from './components/Messages/Messages';
import Music from './components/Music/Music';
import Foto from './components/Foto/Foto';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UserContainer from './components/User/UserContainer';
import Wer from './components/Wer/Wer';
import {BrowserRouter, Route, Routes} from "react-router-dom";




const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/dialogs' element={<DialogsContainer />}/>
            <Route path='/user' element={<UserContainer />}/>
            <Route path='/messages' element={<Messages />}/>
            <Route path='/news' element={<News />}/>
            <Route path='/music' element={<Music />}/>
            <Route path='/foto' element={<Foto />}/>
            <Route path='/wer' element={<Wer />}/>
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}




export default App;
