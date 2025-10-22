import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Review from "./Review"
const Details = () => {

  const [coaster, setCoaster] = useState({})

  const { _id } = useParams()
  const navigate = useNavigate()

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/coasters/${_id}`)
    navigate("/")
  }

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
      <button onClick={handleDelete}> Delete Coaster</button>
      <img src={coaster.img}/>
      <h1>Roller Coaster Name: {coaster.name}</h1>
      <h2>Details: {coaster.details}</h2>
      <h3>Price: ${coaster.price}</h3>
      <Review id={_id} coaster={coaster} setCoaster={setCoaster}/>
      {coaster.reviews?.map((x, index) => (
        <div key={index}>
          <h4>
            Review {index + 1}: {x.comment}
          </h4>
          <h5>Rating: {x.rating}</h5>
        </div>
      ))}
    </>
  )
}
export default Details
