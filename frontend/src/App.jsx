import './style/normalize.css'
import classes from './style/style.module.css'
import Header from './component/Header'
import Main from './page/Main'
import Footer from './component/Footer'
import { Routes, Route } from 'react-router-dom'
import FilmsDescription from './page/FilmsDescription'
import HeaderEmail from './component/HeaderEmail'
import Register from './page/Register'
import EmailSent from './component/EmailSent'
import FormAut from './component/FormAut'
import Aut from './page/Aut'
import Profile from './page/Profile'
import AutFilm from './page/AutFilm'
import AddFilm from './page/AddFilm'
import CheckDescription from './page/CheckDescription'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/FilmsDescription' element={<Header />} />
        <Route path='/Register' element={<HeaderEmail />} />
        <Route path='/EmailSent' element={<HeaderEmail />} />
        <Route path='/FormAut' element={<HeaderEmail />} />
        <Route path='/Profile' element={<Header />} />
        <Route path='/AutFilm' element={<Header />} />
        <Route path='/AddFilm' element={<Header />} />
        <Route path='/CheckDescription' element={<Header />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/FilmsDescription' element={<FilmsDescription />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/EmailSent' element={<EmailSent />} />
        <Route path='/FormAut' element={<Aut />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/AutFilm' element={<AutFilm />} />
        <Route path='/AddFilm' element={<AddFilm />} />
        <Route path='/CheckDescription' element={<CheckDescription />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Footer/>} />
        <Route path='/FilmsDescription' element={<Footer/>} />
        <Route path='/Profile' element={<Footer/>} />
        <Route path='/CheckDescription' element={<Footer/>} />
      </Routes>
    </div>
  );
}

export default App;
