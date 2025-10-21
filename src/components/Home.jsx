import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Home = ({ coasters }) => {
  console.log(coasters)
  return (
    <>
      <p>home</p>
      {coasters.map((coaster) => (
        <Link
          to={`/coasters/${coaster._id}`}
          key={coaster._id}
          coaster={coaster}
        >
          <h1>{coaster.name}</h1>
        </Link>
      ))}
    </>
  )
}
export default Home
