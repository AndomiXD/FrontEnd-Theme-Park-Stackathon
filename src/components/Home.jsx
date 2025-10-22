import { Link } from "react-router-dom"
import Card from "react-bootstrap/Card"
import { Container, Row, Col } from "react-bootstrap"

const Home = ({ coasters }) => {
  return (
    <Container fluid className="py-5 home-container">
      <Row className="g-4 justify-content-center">
        {coasters.map((coaster) => (
          <Col key={coaster?._id} xs={12} sm={6} md={5} lg={4} xl={3}>
            <Link
              to={`/coasters/${coaster?._id}`}
              className="text-decoration-none"
            >
              <Card className="home-card shadow-lg border-0">
                <div className="card-img-wrapper">
                  <Card.Img
                    src={coaster?.img}
                    alt={coaster?.name}
                    className="home-card-img"
                  />
                  <div className="card-overlay">
                    <h4 className="fw-bold text-light mb-1">{coaster?.name}</h4>
                    <p className="text-white-50 mb-2">
                      {coaster?.details?.slice(0, 70)}...
                    </p>
                    <span className="price-tag">${coaster?.price}</span>
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home
