import React from "react";
import {
  BetterWrapper,
  BetterTitle,
  BetterContainer,
  BetterFeedback,
  BetterSubTitle,
  OurLawyer,
  Benefit,
  LawyerImage,
} from "./WhyWeBetter.styled";
import book from "../../images/book.jpg";

const WhyWeBetter = () => {
  return (
    <>
      <BetterWrapper>
        <BetterTitle>
          <h1>BOOKME!</h1>
        </BetterTitle>
        <BetterSubTitle>
          <h2>THE ONLY BOOKING SITE GOOD ENOUGH FOR YOU</h2>
        </BetterSubTitle>
        <BetterContainer>
          <BetterFeedback>
            <OurLawyer>Our dignity</OurLawyer>
            <Benefit>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit ame.
            </Benefit>
          </BetterFeedback>
          <LawyerImage src={book} />
        </BetterContainer>
      </BetterWrapper>
    </>
  );
};

export default WhyWeBetter;
