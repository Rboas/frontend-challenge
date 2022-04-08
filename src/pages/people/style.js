import styled from "styled-components";

export const Header = styled.div`
  grid-column: 1/3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 768px 372px;
  grid-template-rows: 75px 129px 301px;
  gap: 24px;
  margin-top: 48px;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.column}, 1fr);
  margin-top: 24px;
  gap: 4px;
`
