import { useState, useEffect } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Item from "./Item"
import image6 from "../images/fungi6.jpg"
import image3 from "../images/fungi3.jpg"
import image5 from "../images/fungi5.jpg"

const items_data = [
    {
        id: 1,
        title: "Girgola",
        image: image6,
        stock: 5
    },
    {
        id: 2,
        title: "Champignon",
        image: image3,
        stock: 2
    },
    {
        id: 3,
        title: "Morilla",
        image: image5,
        stock: 10
    }

]

const ItemList = () => {

    const [items, setItems] = useState([])
    const [contador, setContador] = useState(0)
    const [stock, setStock] = useState(5)

    const aumentar = () => {
    setContador(contador + 1)
    contador >= stock ? setContador(contador + 0) : setContador(contador + 1)
    }

    const restar = () => {
    setContador(contador - 1)
    }
    
    const getItemsAsync = () =>
        new Promise(resolve => 
            setTimeout(
                () => resolve({items: items_data}),
                3000
            )
        );

    useEffect(() => {
        getItemsAsync().then(result => {
            setItems(result.items);
        })
    }, [])
    

    return ( 
        <main className="p-5">
                <Row>
                            
                    {items.map(item => (
                        <Col sm="6" md="4" lg="3" className="mb-5" key={item.id}>
                            <Item title={item.title} 
                                imagen={item.image}
                                contador={contador} 
                                aumentar={aumentar} 
                                restar={restar}
                                stock={stock} />
                        </Col>
                        
                    ))
                
                }
            
                    
                </Row>
        </main>
    );
}

export default ItemList;