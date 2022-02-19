import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Friends from './components/Friends/Friends';
import About from './components/About/About'
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {
  return (
    <div className='App'>
        
        <BrowserRouter>
           <Header></Header>
             <Routes>
                 <Route exact path="/" element={<Home />} />
                 <Route exact path="/home" element={<Home />} />
                 <Route exact path="/about" element={<About/>} />
                 <Route exact path="/friends" element={<Friends />} />
                 <Route exact path="/friend/:friendId" element={<FriendDetail />} />
                 <Route exact path="*" element={<NotFound/>} />   
             </Routes>
         </BrowserRouter>

    </div>
  );
}

export default App;
