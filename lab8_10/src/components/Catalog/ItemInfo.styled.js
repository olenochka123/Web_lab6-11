import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20%;
  height: 635px;
`;

export const BackBtn = styled.button`
  width: 5rem;
  height: 2rem;
  border-style: none;
  border: #662E1C 1px solid;
  color: black;
  background-color: #EBDCB2;

  &:hover {
    transform: scale(1.11);
  }
`;

export const Info = styled.p`
  width: 30rem;
  letter-spacing: 5px;
  color: #662E1C;
  margin-left: 50px;
`;

export const BuyBtn = styled.button`
  width: 16rem;
  height: 30px;
  background-color: #662E1C;
  color: #C9A66B;
  border-style: none;

  &:hover {
    background-color: #C9A66B;
    color: #662E1C;
    border: #662E1C 1px solid;
  }

  &:active {
    color: #C9A66B;
    background-color: #662E1C;
    border-style: none;
  }
`;
