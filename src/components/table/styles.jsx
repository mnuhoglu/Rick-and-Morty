import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  border:1px solid black;
`;
export const HeaderRow = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  
`;
export const TableRow = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  &:hover {
    background-color: #c4c4c450;
  }
  cursor: pointer;
`;
export const TableColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #00000050;
`;
export const TableText = styled.p`
  font-family: Courier;
  text-align: center;
  font-size:14px;
`;