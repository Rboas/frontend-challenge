import React from 'react';

import { Wrapper, Brand, Menu, Button, Content } from './style';
import { Container } from '../Grid';

function NavBar() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Brand>
            Star Wars
            <span>
              casting
            </span>
          </Brand>
          <Menu>
            <ul>
              <li>
               <a href="/">Personagens</a>
              </li>
              <li>
                <a href="/films">Filmes</a>
              </li>
            </ul>
          </Menu>
          <Button type='button'>
            CADASTRAR - SE
          </Button>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default NavBar;