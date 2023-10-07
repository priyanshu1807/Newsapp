// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 5;
  const apikey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <LoadingBar
          height={4}
          color='white'
          progress={progress}

        />
        <Navbar />
        <Routes>

          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={5} countrt="in" category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={5} countrt="in" category="business" />} />

          <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={5} countrt="in" category="entertainment" />} />

          <Route exact path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={5} countrt="in" category="general" />} />

          <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={5} countrt="in" category="health" />} />

          <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={5} countrt="in" category="science" />} />

          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={5} countrt="in" category="sports" />} />

          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={5} countrt="in" category="technology" />} />



        </Routes>


      </BrowserRouter>
    </div >
  )
}

export default App

