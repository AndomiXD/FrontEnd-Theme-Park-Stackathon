import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Container } from "react-bootstrap"

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
        const response = await axios.get(
          `http://localhost:3000/coasters/${_id}`
        )
        setCoaster(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getOneCoaster()
  }, [_id])

  return (
    <Container className="py-5">
      <Card className="detailed-card shadow-lg border-0 mx-auto">
        <Card.Img variant="top" src={coaster?.img} className="detailed-img" />
        <Card.Body className="text-center">
          <Card.Title className="display-6 fw-bold mb-3 text-light">
            {coaster?.name}
          </Card.Title>
          <Card.Text className="text-white-50 mb-3">
            {coaster?.details}
          </Card.Text>
          <Card.Text className="fs-5 text-warning mb-4">
            Price: <strong>${coaster?.price}</strong> per person
          </Card.Text>
          <Button
            onClick={handleDelete}
            variant="danger"
            className="px-4 py-2 fw-semibold shadow-sm"
          >
            Delete Roller Coaster
          </Button>
        </Card.Body>

        {coaster.reviews?.length > 0 && (
          <div className="reviews-container border-top mt-4 pt-3">
            <h3 className="text-light mb-3">Visitor Reviews</h3>
            {coaster.reviews.map((x, index) => (
              <div key={index} className="review-box mb-3">
                <h5 className="text-white mb-1">"{x.comment}"</h5>
                <p className="text-warning mb-0">⭐ {x.rating}/5</p>
              </div>
            ))}
          </div>
        )}
      </Card>
    </Container>
  )
}

export default Details
