import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Details = () => {
  const [coaster, setCoaster] = useState({})

  const { _id } = useParams()

  useEffect(() => {
    const getOneCoaster = async () => {
      try {
        let response = await axios.get(`http://localhost:3000/coasters/${_id}`)
        setCoaster(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getOneCoaster()
  }, [])

  console.log(coaster)
  return (
    <>
      <p>{coaster.name}</p>
      <p>{coaster.details}</p>
      <p>{coaster.price}</p>
    </>
  )
}
export default Details
