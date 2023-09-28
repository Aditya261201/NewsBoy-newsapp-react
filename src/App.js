import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { useTheme } from './ThemeContext';


const App =()=> {
  
  const {theme} = useTheme();
  const pagesize=6
  const apiKey = "0621765271484497aa6617a36adb1b74";
  
  const [progress, setProgress] = useState(0)

    return (
    <>
      <BrowserRouter>
        <div className={theme === "light" ? "bg-dark" : "bg-white"}> 
        <Navbar />
        {/* top loading bar from npm pkg */}
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pagesize={pagesize} country="in" category="general"/>}/>
          <Route path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pagesize={pagesize} country="in" category="business"/>}/>
          <Route path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pagesize={pagesize} country="in" category="entertainment"/>}/>
          <Route path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pagesize={pagesize} country="in" category="health"/>}/>
          <Route path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pagesize={pagesize} country="in" category="science"/>}/>
          <Route path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pagesize={pagesize} country="in" category="sports"/>}/>
          <Route path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pagesize={pagesize} country="in" category="technology"/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      </>
    )
}

export default App;