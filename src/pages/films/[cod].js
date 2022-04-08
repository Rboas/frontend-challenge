import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Card, Section } from '../../components/Card';
import { Container } from '../../components/Grid';
import { Body } from '../people/style';

import { Grid, Header } from './style';

import Api from '../../services/api';

function Film() {
  const { cod } = useParams();
  const [dataFilm, setDataFilm] = useState([])
  const [listPeoples, setListPeoples] = useState([])
  const [listSpecies, setListSpecies] = useState([])
  const [listVehicles, setListVehicles] = useState([])
  const [listsStarships, setListsStarships] = useState([])
  const [listsPlanets, setListsPlanets] = useState([])

  const handlerPeoples = async (characters) => {
    const res = characters.map(async (character) => {
      const { data } = await Api.get(character)
      return data
    })
    
    const result = await Promise.all(res);
    setListPeoples(result)
  }
  
  const handlerSpecies = async (species) => {
    const res = species.map(async (specie) => {
      const { data } = await Api.get(specie)
      return data
    })
    
    const result = await Promise.all(res);
    setListSpecies(result)
  }

  /**
   * Função responsavel por bucar todos os veiculos
   * @param {[]} vehicles 
   */
   const handlerVehicles = async (vehicles) => {
    const res = vehicles.map(async (vehicle) => {
      const { data } = await Api.get(vehicle)
      return data
    })

    const result = await Promise.all(res);
    setListVehicles(result)
  }

  /**
   * Função responsavel por bucar todas as naves
   * @param {[]} starships 
   */
  const handlerStarships = async (starships) => {
    const res = starships.map(async (starship) => {
      const { data } = await Api.get(starship)
      return data
    })

    const result = await Promise.all(res);
    setListsStarships(result)
  }

  const handlerPlanets = async (planets) => {
    const res = planets.map(async (planet) => {
      const { data } = await Api.get(planet)
      return data
    })
    
    const result = await Promise.all(res);
    setListsPlanets(result)
  }

  const handlerFilm = async () => {
    const { data } = await Api.get(`/films/${cod}`)
    console.log(data)
    setDataFilm(data)

    handlerPeoples(data.characters)
    handlerSpecies(data.species)
    handlerVehicles(data.vehicles)
    handlerStarships(data.starships)
  }

  useEffect(() => {
    handlerFilm()
  },[])
  return (
    <Container>
      <Grid>
        <Header>
          <h1>{dataFilm.title}</h1>
          <div>
            <p>ATUALIZADA EM: {new Date(dataFilm.edited).toLocaleString('pt-BR', { timeZone: 'UTC' })}</p>
            <p>CRIADA EM: {new Date(dataFilm.created).toLocaleString('pt-BR', { timeZone: 'UTC' })}</p>
          </div>
        </Header>

        <Card.Content>
          <Card.Title>
            Sinopse
          </Card.Title>
          {dataFilm.opening_crawl}
        </Card.Content>

        <Card.Content>
          <Card.Title>
            Ficha Técnica
          </Card.Title>

          <Body column={2}>
            <div>
              <Section.Title>
                Diretor
              </Section.Title>
              <Section.Info>
                {dataFilm.director}
              </Section.Info>
            </div>
            <div>
              <Section.Title>
                Produtores
              </Section.Title>
              <Section.Info>
                {dataFilm.producer}
              </Section.Info>
            </div>
            <div>
              <Section.Title>
                Lançamento
              </Section.Title>
              <Section.Info>
                {dataFilm.release_date}
              </Section.Info>
            </div>
          </Body>

        </Card.Content>

        <Card.Content className='lastCard'>
          <Card.Title>
            Aparecem nesse filme
          </Card.Title>
          <Body column={3}>
            <div>
              <Section.Title>
                Personagens
              </Section.Title>
              <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}}>
                { listPeoples.map((item, key) => (
                  <Section.Info key={key}>
                    {item.name}
                  </Section.Info>
                )) }
              </div>
            </div>
            <div>
              <Section.Title>
                Espécies
              </Section.Title>
              { listSpecies.map((item, key) => (
                <Section.Info key={key}>
                  {item.name}
                </Section.Info>
              )) }
            </div>
            <div>
              <Section.Title>
                veículos
              </Section.Title>
              { listVehicles.map((item, key) => (
                <Section.Info key={key}>
                  {item.name}
                </Section.Info>
              )) }
            </div>
            <div>
              <Section.Title>
                Naves
              </Section.Title>
              { listsStarships.map((item, key) => (
                <Section.Info key={key}>
                  {item.name}
                </Section.Info>
              )) }
            </div>
            <div>
              <Section.Title>
                Planetas
              </Section.Title>
              { listsPlanets.map((item, key) => (
                <Section.Info key={key}>
                  {item.name}
                </Section.Info>
              )) }
            </div>
          </Body>
        </Card.Content>
      </Grid>
    </Container>
  );
}

export default Film;