import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Container from 'react-bootstrap/Container'
import ItemDetailContainer from "./Components/ItemDetailContainer"
import ItemListContainer from "./Components/ItemListContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import CustomProvider from "./Components/CustomProvider"



function App() {


  return (
    <>
      <CustomProvider>
        <BrowserRouter>
          <Header />
          <Container fluid>
              <Switch>
                <Route exact path="/" component={ItemListContainer}/>

                <Route path="/categoria/:id" component={ItemListContainer}/>

                <Route path="/item/:id" component={ItemDetailContainer}/>

              </Switch>
            <Footer />
          </Container>
        </BrowserRouter>
      </CustomProvider>

    </> 
  );
}

export default App;
