import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Freebooks from './components/Freebooks'
import Home from './Home/Home'
import Courses from './Courses/Courses'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/course' element={<Courses/>} />
     <Route path='/signup' element={<Signup/>} />
     <Route path='/contact' element={<Contact/>} />
     
   </Routes>
    </div>

    </>
  );
}

export default App
