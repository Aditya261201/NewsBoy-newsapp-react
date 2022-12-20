import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Route, Routes
} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pagesize=6

// hiding apikey in env.local file and any environment variables with (REACT_APP_) type can be accessed by react app and can be used as..
  apiKey= process.env.REACT_APP_NEWS_API
// and then passing apikey everywhere as prop.and send it to news components .



  // setting initial state of progress as 0
  state={
    progress:0
  }
  // function to change the value of the progress . and then its passed to all news elements as whrn we want to show the progress we can change its value.
  setProgress=(progress) => {
    this.setState({progress:progress})
  }

  render() {
    return (
      <>
      <BrowserRouter>
      <div> 
        <Navbar />
        {/* top loading bar from npm pkg */}
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          <Route path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pagesize={this.pagesize} country="in" category="general"/>}/>
          <Route path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pagesize={this.pagesize} country="in" category="business"/>}/>
          <Route path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pagesize={this.pagesize} country="in" category="entertainment"/>}/>
          <Route path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pagesize={this.pagesize} country="in" category="health"/>}/>
          <Route path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pagesize={this.pagesize} country="in" category="science"/>}/>
          <Route path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pagesize={this.pagesize} country="in" category="sports"/>}/>
          <Route path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pagesize={this.pagesize} country="in" category="technology"/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      </>
    )
  }
}