import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import { Card, Section } from '../../components/Card';
import { Container, Content, Flex } from '../../components/Grid';
import { Input } from '../../components/Input';

import Api from '../../services/api';

function Films() {
  const [dataFilms, setDataFilms] = useState([])
  const [search, setSearch] = useState('')
  

  const debounce = (func, timeout = 300) => {
    let time = null;

    const debounceFn = (...args) => {
      clearTimeout(time);
      time = setTimeout(() => {
        func(...args)
      }, timeout);
    }

    return debounceFn
  };

  const handlerFilms = async () => {
    const { data } = await Api.get(`/films/`)
    setDataFilms(data)
  }

  const handlerFilm = async (value) => {
    const { data } = await Api.get(`/films/?search=${value}`)
    setDataFilms(data)
  }

  const debounceChange = debounce(handlerFilm, 600)

  const handlerChange = (value) => {
    setSearch(value)
    debounceChange(value)
  }

  useEffect(() => {
    handlerFilms()
  }, [])


  return (
    <Container>
      <Content>
        <h1>Filmes</h1>
        <Input type="text" value={search} onChange={(e) => handlerChange(e.target.value)} placeholder="Buscar..."/>
        <Flex align="flex-start" justify="flex-start">
          { dataFilms?.results?.map((film, key) => (
            <Card.Content key={key} width="273px">
              <Card.Title>
                {film.title}
              </Card.Title>
              <span>Episódio {film.episode_id}</span>
              <>
                <Section.Content>
                  <Section.Title>informações</Section.Title>
                  <Section.Info>LANÇADO EM: {film.release_date}</Section.Info>
                  <Section.Info>DIRIGIDO POR: {film.director}</Section.Info>
                </Section.Content>
              </>
              <Link to={`/film/${key+1}`}>
                <Card.Button type="button">
                  ver detalher
                </Card.Button>
              </Link>
            </Card.Content>
          )) }
        </Flex>
      </Content>
    </Container>
  );
}

export default Films;