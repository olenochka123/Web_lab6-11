import React, { useState } from "react";
import {
  Container,
  AboutUsTitle,
  AboutUsInfo,
  Title,
  Info,
  LearnMore,
  MoreInfo,
} from "./AboutUs.styled";

const AboutUs = () => {
  const [isTruncated, setIsTruncated] = useState(false);
  const text =
    'More than 3.000.000 accommodations - Hotels, Apartments, Vacation Homes, Villas... ; Book without any prepayment - No surcharges or hidden costs ; No BookMe.com cancellation fee - Cancel or modify your reservation without additional charges according to establishment. Booking hotels online worldwide, more than 3,000,000 accommodations, booking hotels. Booking hotels online worldwide, more than 3,000,000 accommodations, booking hotels. More than 3.000.000 accommodations - Hotels, Apartments, Vacation Homes, Villas... ; Book without any prepayment - No surcharges or hidden costs ; No BookMe.com cancellation fee - Cancel or modify your reservation without additional charges according to establishment. Booking hotels online worldwide, more than 3,000,000 accommodations, booking hotels. Booking hotels online worldwide, more than 3,000,000 accommodations, booking hotels.';

  const resultText = !isTruncated ? text.slice(0, 100) : text;

  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }

  return (
    <Container>
      <AboutUsTitle>
        <h1>About Us</h1>
      </AboutUsTitle>
      <AboutUsInfo>
        <Title>Find the best deals</Title>
        <Info>
          3.000.000+ hotels, apartments, villas and more…
        </Info>
        <MoreInfo>
          <br />
          {resultText}
          <LearnMore onClick={toggleIsTruncated}>
            {isTruncated ? "View less" : "View more"}
          </LearnMore>
        </MoreInfo>
      </AboutUsInfo>
    </Container>
  );
};

export default AboutUs;
