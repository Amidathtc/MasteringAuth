import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../static/Header'
import styled from 'styled-components'

const LayOut = () => {
  return (
    <div>
   
     <Main>
      <Header />
      <Container>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Container>
     </Main>
         
    </div>
  )
}

export default LayOut


const Main = styled.div`
display: flex;
background-color: aliceblue;`

const MainContainer = styled.div`
  display: flex;
  width: calc(100vw- 200px);
  min-height: 100vh;
`

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
`
