import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MenuMobile from "./menuMobile/index";
import { animated, useSpring } from "react-spring";

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    background-color: black;
    padding: 0 64px;
    z-index: 2;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  color: #ffcc2b;
  z-index: 999;
  @media (max-width: 767px) {
    display: none;
  }
`;
const AnimatedNavBarContainer = animated(MenuContainer);
const ItemMenu = styled.div`
  position: relative;
  cursor: pointer;
`;

const StyledLink = styled(NavLink)`
  color: #ffcc2b;
  padding: 2px;
  text-decoration: none;
  &.active {
    color: white;
    border-bottom: 1px solid white;
  }
`;
const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  z-index: 2;
  left: 0;
  width: 180px;
  background-color: black;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const DropdownItem = styled(NavLink)`
  display: block;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  &:hover {
    background-color: #333;
  }
`;

const NavBarMobileDiv = styled.div`
  width: 100%;
  height: 100px;
  padding: 1rem 0;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  -webkit-box-shadow: -5px 10px 15px 5px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -5px 10px 15px 5px rgba(0, 0, 0, 0.2);
  box-shadow: -5px 10px 15px 5px rgba(0, 0, 0, 0.2);
  @media (min-width: 768px) {
    display: none;
  }
`;
const HamburguerButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 27px;
  padding: 0;
  z-index: 11;
  div {
    z-index: 11;
    width: 30px;
    height: 5px;
    background: ${({ isOpen }) => (isOpen ? "black" : "#ffcc2b")};
    border-radius: 50px;
    margin: 3px 0;
  }
`;

const Bar = styled.div`
  width: 30px;
  height: 4px;
  background-color: #333;
  margin: 3px 0;
  transition: transform 0.5s ease-in-out;
  z-index: 11;
  transform-origin: center;
`;

// const Logo = styled.img`
//   width: 50vw;
// `;

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isX, setIsX] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsX(isMenuOpen);
  }, [isMenuOpen]);

  const toggleIcon = () => {
    setIsX(!isX);
    toggleMenu();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const contentSpring = useSpring({
    from: { transform: "translateX(100vw)" },
    to: { transform: "translateX(0)" },
    config: { duration: 1000 },
    delay: 500,
  });

  return (
    <>
      {isMobile ? (
        <NavBarMobileDiv>
          <NavLink to="/">
            <Logo src="/logos/logo_amarela.svg" alt="Logo" />
          </NavLink>

          {isMenuOpen && (
            <MenuMobile isOpen={isMenuOpen} onMenuItemClick={toggleMenu} />
          )}
          <HamburguerButton aria-label="Menu" name="Botão Menu" isOpen={isMenuOpen} onClick={toggleIcon}>
            <Bar 
              style={{
                transform: isX ? "rotate(45deg) translate(7px, 6px)" : "none",
              }}
            />
            <Bar style={{ opacity: isX ? "0" : "1" }} />
            <Bar
              style={{
                transform: isX ? "rotate(-45deg) translate(6px, -6px)" : "none",
              }}
            />
          </HamburguerButton>
        </NavBarMobileDiv>
      ) : (
        <NavBarContainer>
          <NavLink to="/">
            <img src="/logos/logo_amarela.svg" alt="" />
          </NavLink>
          <AnimatedNavBarContainer style={contentSpring}>
            <StyledLink to="/unidades">UNIDADES</StyledLink>
            <ItemMenu onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
              MODALIDADES
              <DropdownMenu isOpen={isMenuOpen}>
                <DropdownItem to="/dumontkids">Dumont Kids</DropdownItem>
                <DropdownItem to="/treinamento">Treinamento</DropdownItem>
                <DropdownItem to="/aulasemgrupo">Aulas em Grupo</DropdownItem>
                <DropdownItem to="/aulasindividuais">
                  Aulas Individuais
                </DropdownItem>
                <DropdownItem to="/beachtenis">Beach Tennis</DropdownItem>
              </DropdownMenu>
            </ItemMenu>
            {/* <StyledLink to="/contato">CONTATO</StyledLink> */}
            <StyledLink to="/escola">ESCOLA</StyledLink>
          </AnimatedNavBarContainer>
        </NavBarContainer>
      )}
    </>
  );
}

export default NavBar;
