import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import Container from 'react-bootstrap/Container'


function App() {
  return (
    <>
      <Header />
      <Container fluid>
        <Main />
        <Footer />
      </Container>
    </> 
  );
}

export default App;
