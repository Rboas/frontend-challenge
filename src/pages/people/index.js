import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, Content, Flex } from '../../components/Grid'
import { Card, Section } from '../../components/Card'
import { Input } from '../../components/Input'

import Api from '../../services/api'


function PeopleList() {
  const [dataPeople, setDataPeople] = useState([])
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

  const handlerPeoples = async () => {
    const { data } = await Api.get(`/people/`)
    setDataPeople(data)
  }

  const handlerPeople = async (value) => {
    const { data } = await Api.get(`/people/?search=${value}`)
    setDataPeople(data)
  }

  const debounceChange = debounce(handlerPeople, 600)

  const handlerChange = (value) => {
    setSearch(value)
    debounceChange(value)
  }
  
  useEffect(() => {
    handlerPeoples()
  }, [])


  return (
    <Container>
      <Content>
        <h1>Personagens</h1>
        <Input type="text" value={search} onChange={(e) => handlerChange(e.target.value)} placeholder="Buscar..."/>
        <Flex justify="flex-start" align="flex-start">
          { dataPeople?.results?.map((people, key) => (
            <Card.Content key={key} width="273px">
              <Card.Title>
                {people.name}
              </Card.Title>
              <>
                <Section.Content>
                  <Section.Title>nascimento</Section.Title>
                  <Section.Info>DATA: {people.birth_year}</Section.Info>
                  <Section.Info>PLANETA: </Section.Info>
                </Section.Content>
                <Section.Content>
                  <Section.Title>descrição fisica</Section.Title>
                  <Section.Info>ESPÉCIE: </Section.Info>
                  <Section.Info>ALTURA: {people.height} METRO</Section.Info>
                </Section.Content>
                <Section.Content>
                  <Section.Title>veículos usados</Section.Title>
                  <Section.Info></Section.Info>
                  <Section.Info></Section.Info>
                </Section.Content>
              </>
              <Link to={`/people/${key+1}`}>
                <Card.Button type="button">
                  ver detalher
                </Card.Button>
              </Link>
            </Card.Content>
          )) }
        </Flex>
      </Content>
    </Container>
  )
}


export default PeopleList