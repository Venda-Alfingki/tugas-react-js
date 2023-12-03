import { Card, Container, Row, Col, Image } from "react-bootstrap"
import hotelImage from "../assets/image/Hotel del Luna.jpg"
import kingImage from "../assets/image/king.jpg"
import myImage from "../assets/image/my.jpg"
import strongImage from "../assets/image/strong woman do bong soon.jpg"
import trueImage from "../assets/image/true beauty.jpg"
import wwImage from "../assets/image/ww.jpg"

const Drama = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">DRAMA</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="drama">
            <Card className="movieImage">
              <Image src={hotelImage} alt="hotel del luna" className="image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">HOTEL DEL LUNA</Card.Title>
                  <Card.Text className="text-left">
                    Romance
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 5 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={kingImage} alt="king the land" className="image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">KING THE LAND</Card.Title>
                  <Card.Text className="text-left">
                    Romance
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="myImage">
              <Image src={myImage} alt="my lovely liar" className="image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">MY LOVELY LIAR</Card.Title>
                  <Card.Text className="text-left">
                    Romance
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={strongImage}
                alt="strong women dobongsoon"
                className="image"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">STRONG GIRL BONG-SOON</Card.Title>
                  <Card.Text className="text-left">
                    Romance
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={trueImage}
                alt="true beauty"
                className="image"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">TRUE BEAUTY</Card.Title>
                  <Card.Text className="text-left">
                    Romance
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={wwImage} alt="what's wrong with secetary kim" className="image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">WHAT'S WRONG WITH SECRETARY KIM</Card.Title>
                  <Card.Text className="text-left">
                   Romance
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Drama