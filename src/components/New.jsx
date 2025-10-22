import { useNavigate } from "react-router-dom"
const New = ({ addRC, newRC, handleChange }) => {
  let navigate = useNavigate()
  const handleSubmit = (e) => {
    addRC(e)
    navigate("/")
  }

  const coaster = { ...newRC }
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
          name="img"
          placeholder="Image Link"
          required
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default New
