import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Container from 'react-bootstrap/Container'
import ItemDetailContainer from "./Components/ItemDetailContainer"
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

              <Route path="/categoria/:id" component={ItemListContainer}/>

              <Route path="/item/:id" component={ItemDetailContainer}/>

              {/* <Route path="/categoria/2" component={ItemListContainer}/> */}
              
{/* Rutas a configurar
‘/’ navega a <ItemListContainer />
‘/category/:id’  <ItemListContainer />
‘/item/:id’ navega a <ItemDetailContainer /> */}

            </Switch>
          <Footer />
        </Container>
      </BrowserRouter>
    </> 
  );
}

export default App;
