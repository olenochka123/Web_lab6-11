import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 75px;
`;

export const AboutUsTitle = styled.div`
  padding-top: 100px;
  padding-bottom: 55px;
  font-size: 40px;
  color: #662E1C;
`;

export const AboutUsInfo = styled.div`
  background-color: #662E1C;
  color: white;
  padding: 25px 25px 25px 25px;
  border-radius: 10px;
  margin-bottom: 100px;
`;

export const Title = styled.div`
  font-size: 24px;
`;

export const Info = styled.div`
  font-size: 18px;
`;

export const LearnMore = styled.span`
  background-color: #C9A66B;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 45px;
  border-radius: 15px;
  margin-top: 25px;
  border-style: none;
  font-size: 16px;
  color: white;
  text-decoration: none;

  &:hover {
    transform: scale(1.11);
    border: 2px solid #662E1C;
  }

  &:active {
    background-color: #C9A66B;
  }
`;

export const MoreInfo = styled.p``;
