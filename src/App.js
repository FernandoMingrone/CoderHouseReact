import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Container from 'react-bootstrap/Container'
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import CartProvider from "./context/CartContext"
import CartScreen from "./Components/CartScreen/CartScreen"


function App() {


  return (
    <>
      <CartProvider>

        <BrowserRouter>

          <Header />

          <Container fluid>

              <Switch> 
                <Route exact path="/" component={ItemListContainer}/>

                <Route path="/categoria/:id" component={ItemListContainer}/>

                <Route path="/item/:id" component={ItemDetailContainer}/>

                <Route path="/cart" component={CartScreen}/>

              </Switch>


          </Container>
            <Footer />

        </BrowserRouter>

      </CartProvider>

    </> 
  );
}

export default App;