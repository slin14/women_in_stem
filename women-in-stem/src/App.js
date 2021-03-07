import './App.css';
import Carousel from './components/Carousel'
import styled from 'styled-components'


function App() {
  return (
    <div className="App">
      <Container>
        <NavbarContainer>

        </NavbarContainer>
        <Main>
          <Carousel />
        </Main>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px auto;
`
const Main = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`
const NavbarContainer = styled.div``