import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        id="model-s"
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImage="/images/model-s.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />

      <Section
        id="model-y"
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImage="/images/model-y.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />

      <Section
        id="model-3"
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImage="/images/model-3.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />

      <Section
        id="model-x"
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImage="/images/model-x.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />

      <Section
        id="commercial"
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImage="/images/solar-panel.jpg"
        leftButton="Order now"
        rightButton="Learn more"
      />

      <Section
        id="solar-panels"
        title="Lowest Cost Solar Panels in America"
        description=""
        backgroundImage="/images/accessories.jpg"
        leftButton="Shop now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
