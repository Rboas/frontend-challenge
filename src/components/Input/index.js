import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  max-width: 570px;
  padding: 10px 15px;
  font-size: 14px;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.closestBackground};
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 42px;
`;
