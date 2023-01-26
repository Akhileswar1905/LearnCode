import { NavLink, Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar className="navbar" bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand className="customNav" to="/">
            <Link className="link" to="/">
              <h1>LearnCode</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="customLink" to="/">
                Home
              </NavLink>
              <NavLink className="customLink" to="/webdev">
                Web Development
              </NavLink>
              <NavLink className="customLink" to="/ml">
                Machine Learning
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
