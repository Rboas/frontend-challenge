import styled from "styled-components";

export const Card = {
  Content: styled.div`
    background-color: ${({ theme }) => theme.colors.closestBackground};
    border: 2px solid ${({ theme }) => theme.colors.borderColor};
    padding: 24px 15px;
    width: ${ props => props.width ? props.width : '100%'};
    /* min-height: 291px; */

    &:last-child {
      grid-column: 2/3;
      grid-row: 2/4;
    }
  `,

  Title: styled.h2`
    font-size: 24px;
    letter-spacing: 0;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.yellow};
    margin: 0;
    padding: 0;
  `,

  Button: styled.button`
    font-size: 15px;
    text-transform: uppercase;
    padding: 10px 17px;
    border: 2px solid ${({ theme }) => theme.colors.yellow};
    background: transparent;
    color: ${({ theme }) => theme.colors.yellow};
    width: 100%;
    cursor: pointer;
  `,

}

export const Section = {
  Content: styled.div`
    margin: 24px 0;
  `,

  Title: styled.h4`
    font-size: 18px;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  `,

  Info: styled.p`
    font-size: 14px;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  `,

  Chart: styled.div`
    height: 174px;
    width: 140px;
    margin: 24px auto;
  `
}