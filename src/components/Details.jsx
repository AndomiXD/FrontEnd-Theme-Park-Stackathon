import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
=
import Review from "./Review"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

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

  // console.log(coaster)
  return (
    <>
      <Card
        className="detailed-card"
        style={{
          width: "27rem",
          margin: "0 auto",
          backgroundColor: "#96999e",
          color: "white",
          textShadow: "1px 1px 3px black",
        }}
      >
        <Card.Img variant="top" src={coaster?.img} />
        <Card.Body>
          <Card.Title> {coaster?.name}</Card.Title>
          <Card.Text>Details: {coaster?.details}</Card.Text>
          <Card.Text>Price: ${coaster?.price} Per Person</Card.Text>
          <Button onClick={handleDelete} variant="danger">
            Delete Roller Coaster
          </Button>
        </Card.Body>

        <div className="reviews-container">
          {coaster.reviews?.map((x, index) => (
            <div key={index}>
              <h4>
                Review {index + 1}: {x.comment}
              </h4>
              <h5>Rating: {x.rating}</h5>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
export default Details
