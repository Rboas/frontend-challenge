import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';

import { Card, Section } from '../../components/Card';
import { Container, Flex } from '../../components/Grid';

import { Header, Grid, Body } from './style';
import Api from '../../services/api';

ChartJS.register(ArcElement, Tooltip, Legend);

function People() {
  const { cod } = useParams();
  const [dataPeople, setDataPeople] = useState([])
  const [listFilms, setListFilms] = useState([])
  const [listVehicles, setListVehicles] = useState([])
  const [listsStarships, setListsStarships] = useState([])
  const [qtdFilms, setQtdFilms] = useState(0)

  const dataPie = {
    labels: [],
    datasets: [
      {
        label: '',
        data: [7 - qtdFilms, qtdFilms],
        backgroundColor: ['#FFE81F', '#7388A95A'],
      },
    ],
  };

  /**
   * Função responsavel por bucar todos os filmes
   * @param {[]} films 
   */
  const handlerFilms = async (films) => {
    const res = films.map(async (film) => {
      const { data } = await Api.get(film)
      return data
    })

    const result = await Promise.all(res);
    setListFilms(result)
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

  /**
   * Função responsavel por bucar o personagem através do cod
   * e chamar as depois funções que trazem informações de veiculo,
   * naves, filmes, ...
   */
  const handlerPeoples = async () => {
    const { data } = await Api.get(`/people/${cod}`)

    setDataPeople(data)
    setQtdFilms(data.films.length)

    handlerFilms(data.films)
    handlerVehicles(data.vehicles)
    handlerStarships(data.starships)
  }

  useEffect(() => {
    handlerPeoples()
  }, [])

  return (
    <Container>
      <Grid>
        <Header>
          <h1>{dataPeople.name}</h1>
          <div>
            <p>ATUALIZADA EM: {new Date(dataPeople.edited).toLocaleString('pt-BR', { timeZone: 'UTC' })}</p>
            <p>CRIADA EM: {new Date(dataPeople.created).toLocaleString('pt-BR', { timeZone: 'UTC' })}</p>
          </div>
        </Header>

        <Card.Content>
          <Card.Title>
            informações fÍSicas
          </Card.Title>
          <Flex justify="flex-start" style={{marginTop: '24px'}}>
            <Section.Info>ESPÉCIE: HUMANO</Section.Info>
            <Section.Info>ALTURA: {dataPeople.height} METRO</Section.Info>
            <Section.Info>PESO: {dataPeople.mass} KG</Section.Info>
            <Section.Info>COR DO CABELO: {dataPeople.hair_color}</Section.Info>
          </Flex>
        </Card.Content>

        <Card.Content>
          <Card.Title>
            veículos e naves utilizados
          </Card.Title>

          <Body column={2}>
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
          </Body>

        </Card.Content>

        <Card.Content className='lastCard'>
          <Card.Title>
            Aparições em filmes
          </Card.Title>
          <Section.Chart>
            <Pie data={dataPie} />
          </Section.Chart>
          <Section.Title>
            Aparece em
          </Section.Title>
          {listFilms.map((item, key) => (
            <p key={key}>
              <a href="">{item.title}</a>
            </p>
          ))}
        </Card.Content>
      </Grid>
    </Container>
  );
}

export default People;