import { useState } from "react"
import axios from "axios"
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
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="comment"
          value={review?.comment}
          onChange={handleChange}
          placeholder="Review the roller coaster"
          required
        />
        <br />
        <label>Rate the roller coaster from 5</label>
        <br />
        <input type="radio" name="rating" value="1" checked={review.rating === 1} onChange={handleChange} />
        <label>1</label>
        <input type="radio" name="rating" value="2" checked={Number(review.rating) === 2} onChange={handleChange} />
        <label>2</label>
        <input type="radio" name="rating" value="3" checked={Number(review.rating) === 3} onChange={handleChange} />
        <label>3</label>
        <input type="radio" name="rating" value="4" checked={Number(review.rating) === 4} onChange={handleChange} />
        <label>4</label>
        <input type="radio" name="rating" value="5" checked={Number(review.rating) === 5} onChange={handleChange} />
        <label>5</label>
        <br />
        <button>Submit</button>
      </form>
    </>
  )
}
export default Review
