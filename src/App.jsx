// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './app.css'

import Nav from './components/Nav'
import Footer from "./components/Footer"

import Layout from "./components/Layout";

import Main from "./components/main/Main";
// import About from "./components/about/About";
// import Works from "./components/works/Works";
// import Contact from "./components/contact/Contact";

import Error from "./components/error/Error";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      

      <BrowserRouter>

      <Nav />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/sign-up" element={<Contact />} /> */}
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>

        <Footer />
        
      </BrowserRouter>
      
      
    </>
  )
}

export default App
