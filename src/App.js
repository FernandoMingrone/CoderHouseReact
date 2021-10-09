import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Container from 'react-bootstrap/Container'
import ItemDetail from "./Components/ItemDetail"
import ItemListContainer from "./Components/ItemListContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom"



function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Container fluid>
            <Switch>
              <Route exact path="/" component={ItemListContainer}/>

              <Route path="/categoria/:id" component={ItemDetail}/>

              {/* <Route path="/categoria/2" component={ItemListContainer}/> */}

            </Switch>
          <Footer />
        </Container>
      </BrowserRouter>
    </> 
  );
}

export default App;
