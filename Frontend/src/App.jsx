import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Freebooks from './components/Freebooks'
import Home from './Home/Home'
import Courses from './Courses/Courses'
import { Navigate, Route, Routes, useActionData } from 'react-router-dom'
import Signup from './components/Signup'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
     <Route path='/' element={<Home/>} />
     <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
     <Route path='/signup' element={<Signup/>} />
     <Route path='/contact' element={<Contact/>} />
   </Routes>
   <Toaster />
    </div>

    </>
  );
}

export default App
