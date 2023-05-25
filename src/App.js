import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Messages from './components/Messages/Messages';
import Music from './components/Music/Music';
import Foto from './components/Foto/Foto';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Wer from './components/Wer/Wer';
import {BrowserRouter, Route, Routes} from "react-router-dom";



const App = (props) => {
debugger;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile' element={<Profile statePost={props.state}  dispatch={props.dispatch} />}/>
            <Route path='/dialogs' element={<Dialogs stateDialog={props.state.MessagesPage} store={props.store}/>}/>
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
