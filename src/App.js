import { useState } from "react"
import Header from "./Components/Header"
import ItemList from "./Components/ItemList"
import Footer from "./Components/Footer"
import Container from 'react-bootstrap/Container'
import ItemListContainer from "./Components/ItemListContainer"



function App() {


  return (
    <>
      <Header />
      <Container fluid>
        <ItemListContainer/>
        <Footer />
      </Container>
    </> 
  );
}

export default App;
