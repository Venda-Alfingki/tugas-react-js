import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="">Drama forever</Navbar.Brand>
          <Nav>
            <Nav.Link href="#drama">DRAMA</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
