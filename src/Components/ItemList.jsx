import { useState, useEffect } from "react"
import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
import Item from "./Item"
// import image6 from "../images/fungi6.jpg"
// import image3 from "../images/fungi3.jpg"
// import image5 from "../images/fungi5.jpg"

// const items_data = [
//     {
//         id: 1,
//         title: "Girgola",
//         image: image6,
//         stock: 5
//     },
//     {
//         id: 2,
//         title: "Champignon",
//         image: image3, 
//         stock: 2
//     },
//     {
//         id: 3,
//         title: "Morilla",
//         image: image5,
//         stock: 10
//     }

// ]

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
    
    const getItemsAsync = () =>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then((resp)=>{
            console.log(resp);
            setItems(resp)
        });
    }
    // new Promise(resolve => 
    //     setTimeout(
    //         () => resolve({items: items_data}),
    //         2000 
    //     )
    
    // );
    
    useEffect(() => {
        getItemsAsync();
        
        // getItemsAsync().then(result => {
        //     setItems(result.items);
        // })
    },[])
    

    return ( 
        <main className="p-5">
            <Row>
                        
                {items.length>0 && items.map((item) => {
                        return <Item id={item.id} category={item.category} price={item.price} title={item.title} image={item.image} contador={contador} aumentar={aumentar} 
                            restar={restar}
                            stock={item.stock}/>
                
                })
                } 
            </Row>
        </main>
    )
}

export default ItemList;