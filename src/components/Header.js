import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a href="#model-s">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href={`#${car.toLowerCase().replaceAll(" ", "-")}`}>
              {console.log(car.toLowerCase().replaceAll(" ", "-"))}
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#shop">Shop</a>
        <a href="#account">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="#model-s">Model S</a>
        </li>
        <li>
          <a href="#model-3">Model 3</a>
        </li>
        <li>
          <a href="#model-x">Model X</a>
        </li>
        <li>
          <a href="#model-y">Model Y</a>
        </li>
        <li>
          <a href="#existing-inventory">Existing Inventory</a>
        </li>
        <li>
          <a href="#used-inventory">Used Inventory</a>
        </li>
        <li>
          <a href="#trade-in">Trade-In</a>
        </li>
        <li>
          <a href="#cybertruck">Cybertruck</a>
        </li>
        <li>
          <a href="#roadster">Roadster</a>
        </li>
        <li>
          <a href="#semi">Semi</a>
        </li>
        <li>
          <a href="#accessories">Charging</a>
        </li>
        <li>
          <a href="#powerwall">Powerwall</a>
        </li>
        <li>
          <a href="#commercial">Commercial Energy</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  z-index: 1;
  @media (max-width: 768px) {
    display: none;
  }
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    font-size: 14px;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    font-size: 14px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 1;
  list-style: none;
  padding: 20;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  li {
    padding: 15px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  margin-top: 2px;
  margin-right: 2px;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 15px;
  margin-right: 20px;
`;

export default Header;
