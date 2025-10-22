import { Link } from "react-router-dom"
import Card from "react-bootstrap/Card"

const Home = ({ coasters }) => {
  console.log(coasters)
  return (
    <>
      {coasters.map((coaster) => (
        <Link
          to={`/coasters/${coaster?._id}`}
          key={coaster?._id}
          coaster={coaster}
        >
          <Card
            style={{
              display: "flex",
              alignContent: "center",
              width: "28rem",
              color: "white",
            }}
          >
            <Card.Img
              src={coaster?.img}
              alt="Card image"
              fluid="true"
              className="card-img"
            />

            <Card.ImgOverlay>
              <Card.Title>Name: {coaster?.name}</Card.Title>
              <Card.Text>Details: {coaster?.details}</Card.Text>
              <Card.Text>${coaster?.price} Per Person</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Link>
      ))}
    </>
  )
}

export default Home
