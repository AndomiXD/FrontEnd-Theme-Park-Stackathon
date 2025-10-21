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
        <input
          type="text-area"
          // value={boat.description}
          // onChange={handleChange}
          // name={"description"}
          // placeholder={"description"}
        />
        <input
          type="text"
          // value={boat.price}
          // onChange={handleChange}
          // name={"price"}
          // placeholder={"price"}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default New
