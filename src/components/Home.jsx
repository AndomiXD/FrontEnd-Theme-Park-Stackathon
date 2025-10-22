import { Link } from "react-router-dom"
import Card from "react-bootstrap/Card"

const Home = ({ coasters }) => {
  console.log(coasters)
  return (
    <>
      {coasters.map((coaster) => (
        <Link
          to={`/coasters/${coaster._id}`}
          key={coaster._id}
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
              src={coaster.img}
              alt="Card image"
              fluid="true"
              className="card-img"
            />

            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Link>
      ))}
    </>
  )
}

// //       <Card className="bg-dark text-white">
// //         <Card.Img src={`${coaster?.img}/100px270"`} alt="Card image" />
// //         <Card.ImgOverlay>
// //           <Card.Title>{coaster.name}</Card.Title>
// //           <Card.Text>{coaster.details}</Card.Text>
// //           <Card.Text>Last updated 3 mins ago</Card.Text>
// //         </Card.ImgOverlay>
// //       </Card>
//

export default Home
