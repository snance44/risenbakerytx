import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar
        bg="info"
        variant="dark"
        expand="lg"
        sticky="top"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/" className="pr-2">
            <Navbar.Brand>Risen Bakery</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <LinkContainer to="/prices" className="px-2">
              <Nav.Link>
                <h6 style={{ color: "white" }} className="pt-2">
                  Prices
                </h6>
              </Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/contactus" className="px-2">
              <Nav.Link>
                <h6 style={{ color: "white" }} className="pt-2">
                  Contact
                </h6>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/aboutus" className="px-2">
              <Nav.Link>
                <h6 style={{ color: "white" }} className="pt-2">
                  About
                </h6>
              </Nav.Link>
            </LinkContainer>
            <Nav className="ms-auto">
              {userInfo && userInfo.isAdmin ? (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/pricelist">
                    <NavDropdown.Item>Prices</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ): userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
             
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
