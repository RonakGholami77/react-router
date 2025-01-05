import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const expand = "lg";
function NavBar() {
  return (
    <Navbar expand={expand} className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Kiawan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/article">
                Article
              </Nav.Link>
              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item as={Link} to="/link/1">
                  Action 1
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="link/2">
                  Action 2
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

// function NavBar() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand as={Link} to="/">
//           Kiawan
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             // style={{ maxHeight: "100px" }}
//             // navbarScroll
//           >
//             <Nav.Link as={Link} to="/about">
//               About
//             </Nav.Link>
//             <Nav.Link as={Link} to="/article">
//               Article
//             </Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item as={Link} to="/link/1">
//                 Action1
//               </NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/link/2">
//                 Action2
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link as={Link} to="/main" disabled>
//               Main
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

export default NavBar;
