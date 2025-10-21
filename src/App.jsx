import "./App.css"
import axios from "axios"
import Home from "./components/Home"
import Details from "./components/Details"
import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"

const App = () => {
  const [coasters, setCoasters] = useState([])

  useEffect(() => {
    const getCoasters = async () => {
      try {
        let response = await axios.get("http://localhost:3000/coasters")
        setCoasters(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getCoasters()
  }, [])

  return (
    <>
      <header>
        <p>header</p>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home coasters={coasters} />}></Route>
          <Route path="/coasters/:_id" element={<Details />} />
        </Routes>
      </main>
    </>
  )
}

export default App
