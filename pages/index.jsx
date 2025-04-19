import { useState } from "react"
import Head from "next/head"

import Header from '../src/componentes/header/Header'
import Container from "../src/componentes/container/Container"
import Title from '../src/componentes/title/Title'
import Subtitle from "../src/componentes/subtitle/Subtitle"
import Section from "../src/componentes/section/Section"
import Button from "../src/componentes/button/Button"

function HomePage () {

  const [click, setClick] = useState(0)

  function handleClick () {
    setClick(click + 1)
  }

  return (

    <>

      <Head>
        <title>Joca Pitoco</title>
      </Head >
        
      <Header className="header">
        <Container>
          <Title>React + Next </Title>
        </Container>
      </Header>

      <Section>
        <Container>
          <Subtitle>Contador</Subtitle>
          <div className="button_container"> 
            <Button onClick={handleClick}>Clique Aqui</Button>
          </div>
          <div className="click_container">
            <p>Quantidade de Cliques: {click}</p>
          </div>
        </Container>
      </Section>



    </>
  )
}

export default HomePage