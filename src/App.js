import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import {Container} from './components/styles/Container.styled';
import {Cards} from './components/styles/Cards.styled';
import GlobalStyles from './components/styles/Global';
import Card from './components/Card';
import data from './data';

const theme = {
  colors: {
    body: "#000"
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <Cards>
            {
              data.map((item, index) => (
                <Card key={index} id={item.id} title={item.title} text={item.text} link={item.link} />
             ))
            }
          </Cards>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
