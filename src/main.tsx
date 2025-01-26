import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './app'
import About from './about'
import Contact from './contact'
import Nav from './nav'
import Error from './error'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/Zaidjm1/">
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route index element={<App/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <footer className='flex mx-auto w-[25%] h-[100px] mt-10 justify-center border-t'>
      <p className='m-auto text-gray-400 text-[14px]'>© Michael Diaz 2024</p>
    </footer>
  </StrictMode>,
)
