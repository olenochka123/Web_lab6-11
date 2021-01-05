import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Cart,
  CartCount,
  CartFrame,
} from "./Header.styled";
import { connect } from "react-redux";

const Header = ({ cart }) => {
  const [click, setClick] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              BookMe!
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
            </NavMenu>
            <NavMenu onClick={handleClick}>
              <NavItem>
                <NavLinks to="/catalog">Catalog</NavLinks>
              </NavItem>
            </NavMenu>
            <NavMenu onClick={handleClick}>
              <NavItem>
                <NavLinks to="/">About us</NavLinks>
              </NavItem>
            </NavMenu>
            <NavLinks to="/cart">
              <CartFrame>
                <Cart />
                <CartCount>{cartCount}</CartCount>
              </CartFrame>
            </NavLinks>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.hotelFirm.cart,
  };
};

export default connect(mapStateToProps)(Header);
