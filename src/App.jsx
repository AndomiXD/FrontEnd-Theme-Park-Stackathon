import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import Details from "./components/Details"
import Home from "./components/Home"
import Navigation from "./components/Navigation"
import New from "./components/New"

import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"

const App = () => {
  let emptyRC = {
    id: "",
    name: "",
    details: "",
    price: "",
    img: "",
  }
  const [coasters, setCoasters] = useState([])
  const [newRC, setNewRC] = useState(emptyRC)
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

  const addRC = async (e) => {
    e.preventDefault()

    const createdRC = {
      ...newRC,
      price: parseInt(newRC.price),
    }
    const response = await axios.post(
      "http://localhost:3000/coasters",
      createdRC
    )

    setCoasters([...coasters, response.data])
    setNewRC(emptyRC)
  }
  const handleChange = (e) => {
    setNewRC({ ...newRC, [e.target.name]: e.target.value })
  }
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home coasters={coasters} />}></Route>
          <Route
            path="/new"
            element={
              <New addRC={addRC} newRC={newRC} handleChange={handleChange} />
            }
          ></Route>
          <Route path="/coasters/:_id" element={<Details />} />
        </Routes>
      </main>
    </>
  )
}

export default App
