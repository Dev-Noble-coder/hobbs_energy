import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPageLayout from './layout/LandingPageLayout'
import HomePage from './pages/HomePage'


function App() {

  return (
    <>
      <Router>
        <Toaster position="top-right" />
        <Routes>
        <Route path="/" element={<LandingPageLayout />}>
            <Route index element={<HomePage />} />
        </Route>
        </Routes>
      </Router>
         </>
  )
}

export default App
