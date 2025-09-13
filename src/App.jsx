import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import CategoryClassesComp from './Components/CategoryClassesComp';
import ClassDesc from './Components/ClassDesc';
import Classes from './Components/Classes';
import Favourite from './Components/Favourite';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { store } from './reducx/store';
import Register from './Components/register';
import Login from './Components/Login';





function App() {


  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/category/:id' element={<CategoryClassesComp/>}></Route>
        <Route path='/class/:id' element={<ClassDesc/>}></Route>
        <Route path='/classes' element={<Classes/>}></Route>
        <Route path='/favourite' element={<Favourite/>} ></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
<Footer/>
    </BrowserRouter>
  )
}

export default App
