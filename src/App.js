import Header from './componentes/Header'

import styled from 'styled-components'
import SearchButton from './componentes/Pesquisa'


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#73020C 35%,#73020C 165%);
`

function App() {
  return (
    <AppContainer>
      <Header />
     < SearchButton/>
    </AppContainer>
  );
}

export default App
