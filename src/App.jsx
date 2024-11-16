import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ErrorPage } from './Components/errorpage';
import { HomePage } from './Components/homepage';
import { Basketball } from './Components/Basketball';
import { Soccer } from './Components/Soccer';
import { Tennis } from './Components/Tennis';
import { NavBar } from './Components/NavBar';
import { Footer } from './Components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
        <NavBar/>
        <Footer/>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/basketball" element={<Basketball />}></Route>
          <Route path="/tennis" element={<Tennis />}></Route>
          <Route path="/soccer" element={<Soccer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
