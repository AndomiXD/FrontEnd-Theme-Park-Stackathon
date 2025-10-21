import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Details from "./components/Details"
import New from "./components/New"
import Review from "./components/Review"
import { Route, Routes } from 'react-router-dom'
import Nav from "./components/Nav"
function App() {

  return (
    <>
    <header><Nav/></header>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Details/>}/>
        <Route path='/:id/review' element={<Review/>}/>
        <Route path='/new' element={<New/>}/>
      </Routes>
    </main>
    </>
  )
}

export default App
