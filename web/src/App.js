import './App.css';
import Carousel from './components/Carousel'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import SearchContainer from './components/SearchContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}


function Home() {
  const Log = () => {
    console.log("I clicked on the date")
  }

  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


  return (
    
    <div className="App">
      <Container>
        <NavbarContainer>
          <SearchContainer/>
          <h1>
            Today we celebrate the achievements of these women 🎉
          </h1>
          <DateContainer onClick={Log}>
            <motion.span initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}>
            {date}
            </motion.span>
          </DateContainer>
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
  grid-template-rows: min-content auto;
  background: #99d5ca;
`
const Main = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`
const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`

const DateContainer = styled.span`
  font-size:60px;
  span {
    // text-decoration:underline;
    color:#f50057;
    background: white;
    border-radius:6px;
    padding-left: 10px;
    padding-right: 10px;
  }

`