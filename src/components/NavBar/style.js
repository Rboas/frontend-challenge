import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.middleBrackground};
  padding: 15px 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.div`
  text-align: center;
  font-size: 32px;
  letter-spacing: 1.28px;
  color: ${({ theme }) => theme.colors.yellow};

  span {
    font-size: 24px;
    letter-spacing: 0.96px;
  }
`;

export const Menu = styled.nav`
  ul {
    list-style: none;
    li {
      display: inline-block;
      background-color: ${({ theme }) => theme.colors.closestBackground};
      text-align: center;
      width: 272px;
      height: 42px;
      padding: 8px 0;
      border-radius: 100px;
      font-size: 16px;
      
      &:first-child {
        margin-right: 24px;
      }
    }
  }
`;
export const Button = styled.button`
  font-size: 15px;
  padding: 10px 17px;
  border: 2px solid #FFE81F;
  background: transparent;
  color: #ffffff;
`;