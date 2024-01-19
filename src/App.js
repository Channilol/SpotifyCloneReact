import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import SearchPage from './components/SearchPage/SearchPage';
import HomePage from './components/HomePage/HomePage';
import AlbumPage from './components/AlbumPage/AlbumPage';
import Player from './components/Player/Player';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <LeftSidebar />
          <div className='AppMain'>
            <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/album/:idalbum' element={<AlbumPage />}/>
              <Route path='/login' element={<LoginPage />}/>
              <Route path='/register' element={<RegisterPage />}/>
              <Route path='/search' element={<SearchPage />} />
            </Routes>
          </div>
          <Player />
      </div>
    </BrowserRouter>
  );
}

export default App;