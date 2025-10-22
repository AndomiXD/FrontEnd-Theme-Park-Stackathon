import { useNavigate } from "react-router-dom"
const New = ({ addRC, handleChange }) => {
  let navigate = useNavigate()
  const handleSubmit = (e) => {
    addRC(e)
    navigate("/")
  }
  return (
    <div>
      <h1>Add A New Roller Coaster</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Name"
          required
        />
        <br />
        <input
          type="text"
          onChange={handleChange}
          name="details"
          placeholder="Details"
          required
        />
        <br />
        <input
          type="number"
          onChange={handleChange}
          name="price"
          placeholder="Price"
          required
        />
        <br />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Add a photo link"
          name="img"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default New
