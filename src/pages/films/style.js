import styled from "styled-components";

export const Header = styled.div`
  grid-column: 1/3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 372px 768px;
  grid-template-rows: 75px 363px 1fr;
  gap: 24px;
  margin-top: 48px;
`;