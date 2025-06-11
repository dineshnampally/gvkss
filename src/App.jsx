import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Career from './components/Career'
import About from './components/About'
import Contact from './components/Contact'
import Banner from './components/home-comp/Banner'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/career' element={<Career/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <section className='w-full mb-10'>
        <Banner />
      </section>
      <Footer/>
    </>
  )
}

export default App