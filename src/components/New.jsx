import { useNavigate } from "react-router-dom"
const New = ({addRC, newRC, handleChange}) => {
  let navigate=useNavigate()
  const handleSubmit = (e) => {
    addRC(e)
    navigate("/")
  }

  const coaster = {...newRC}
  return (
    <div>
      <h1>Add A New Roller Coaster</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          // value={boat.name}
          onChange={handleChange}
          name="name"
          placeholder="name"
        />
        <br />
        <input
          type="text"
          // value={boat.img}
          onChange={handleChange}
          name="details"
          placeholder="details"
        />
        <br />
        <input
          type="number"
          // value={boat.description}
          onChange={handleChange}
          name="price"
          placeholder="Price"
        />
        <br />
        <label>Attach an image: </label>
        <input
          type="file"
          // value={boat.price}
          onChange={handleChange}
          name="image"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default New
