import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";

import "../style.css";
import { useSelector } from "react-redux";

const Header = () => {
  const { cart, wishList } = useSelector((state) => state.product);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Test Redux Thunk
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <div style={{ position: "relative" }}>
                <div>
                  <AiOutlineShoppingCart />
                </div>
                <div className="cartCount">{cart.length}</div>
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to="/wish-list">
              <div style={{ position: "relative" }}>
                <div>
                  <AiFillHeart />
                </div>
                <div className="cartCount">{wishList.length}</div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
