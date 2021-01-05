import styled from "styled-components";

export const SelectionWrapper = styled.form`
  width: 600px;
  height: 70px;
  margin-left: 100px;
  display: flex;
  align-items: center;
`;

export const Selection = styled.select`
  size: 7;
  margin-left: 24px;
  height: 35px;
  width: 150px;
  background-color: #EBDCB2;
  color: #662E1C;
  border-style: none;

  &:hover {
    background-color: #C9A66B;
  }
`;

export const Wrapper = styled.div`
  background-color: #C9A66B;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Option = styled.option`
  color: ${(props) => props.color};
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 100px;
`;

export const FilterInput = styled.input`
  background-color: #fff;
  height: 35px;
  width: 300px;
  border-style: none;
  color: #C9A66B;
`;

export const ApplyButton = styled.button`
  width: 100px;
  height: 35px;
  margin-right: 50px;
  background-color: #EBDCB2;
  border-style: none;
  color: #EBDCB2;

  &:hover {
    background-color: #C9A66B;
  }
`;
