import styled from "styled-components";

export const HeroVideo = styled.div`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VideoBackground = styled.video`
  height: 500px;
  object-fit: cover;
`;

export const GetStarted = styled.button`
  height: 53px;
  width: 400px;
  border-radius: 10px;
  background-color: #662E1C;
  border-style: none;
  color: white;
  text-shadow: 15px;
  margin-top: -280px;
  z-index: 2;
  font-size: 24px;

  &:hover {
    background-color: #C9A66B;
    border: 2px solid #662E1C;
  }

  &:active {
    background-color: #C9A66B;
  }
`;
