import { useNavigate } from "react-router-dom"
const New = ({ addRC, handleChange }) => {
  let navigate = useNavigate()
  const handleSubmit = (e) => {
    addRC(e)
    navigate("/")
  }
  return (
    <div className="new-container">
      <h1>Add A New Roller Coaster</h1>
      <form onSubmit={handleSubmit} className="new-form">
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Name"
          required
        />
        <input
          type="text"
          onChange={handleChange}
          name="details"
          placeholder="Details"
          required
        />
        <input
          type="number"
          onChange={handleChange}
          name="price"
          placeholder="Price"
          required
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Add a photo link"
          name="img"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default New
