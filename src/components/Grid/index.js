import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
`;

export const Content = styled.main`
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${ props => props.align ? props.align : 'center'};
  justify-content: ${ props => props.justify ? props.justify : 'center'};
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;
