import { useState } from "react"
import axios from "axios"
import { Form, Button } from "react-bootstrap"

const Review = ({ coaster, setCoaster, id }) => {
  const initialState = {
    comment: "",
    rating: 1,
  }
  const [review, setReview] = useState(initialState)

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const addReview = await axios.post(
      `http://localhost:3000/coasters/${id}`,
      review
    )
    if (addReview.status === 200) {
      setCoaster({
        ...coaster,
        reviews: [
          ...(coaster.reviews || []),
          { comment: review.comment, rating: review.rating },
        ],
      })
      setReview(initialState)
    }
  }

  return (
    <div className="review-form-container mt-4 mb-4 p-3 rounded-4 shadow-sm">
      <h4 className="text-light mb-3">Leave a Review</h4>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="comment"
            value={review.comment}
            onChange={handleChange}
            placeholder="Share your thoughts..."
            className="review-input"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 text-light">
          <Form.Label className="fw-semibold">
            Rate the roller coaster
          </Form.Label>
          <div className="rating-group d-flex justify-content-center gap-3 mt-1">
            {[1, 2, 3, 4, 5].map((num) => (
              <Form.Check
                key={num}
                inline
                label={num}
                name="rating"
                value={num}
                type="radio"
                checked={Number(review.rating) === num}
                onChange={handleChange}
                className="rating-radio"
              />
            ))}
          </div>
        </Form.Group>

        <Button
          variant="warning"
          type="submit"
          className="fw-semibold px-4 py-2 review-btn"
        >
          Submit Review
        </Button>
      </Form>
    </div>
  )
}

export default Review
