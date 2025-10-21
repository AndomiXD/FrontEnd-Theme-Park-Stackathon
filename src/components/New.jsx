const New = () => {
  return (
    <div>
      <h1>Add A New Roller Coaster</h1>
      <form>
        <input
          type="text"
          // value={boat.name}
          // onChange={handleChange}
          // name={"name"}
          placeholder="name"
        />
        <br />
        <input
          type="text"
          // value={boat.img}
          // onChange={handleChange}
          // name={"img"}
          placeholder="details"
        />
        <br />
        <input
          type="number"
          // value={boat.description}
          // onChange={handleChange}
          // name={"description"}
          placeholder="Price"
        />
        <br />
        <label>Attach an image: </label>
        <input
          type="file"
          // value={boat.price}
          // onChange={handleChange}
          // name={"price"}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default New
