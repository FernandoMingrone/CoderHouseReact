
//es como el ItemListContainer
// import { useState, useEffect } from "react"
// import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
// import Item from "./Item"
import ItemDetail from "./ItemDetail"
// import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {
        return ( 
        <>
            <ItemDetail />
        </>
    )
}
export default ItemDetailContainer;


    
    // const {id} = useParams()
    // // console.log(resultado)
    // // console.log("muetra componente")

    // const [productos, setProductos] = useState([])
    
    // console.log("Reejecucion")

    // useEffect(() => {

    //    console.log("Aca hago el pedido")
        // if(resultado.esUnObjetoVacio){
        //     hagoElPedidoDeTodosLosProductos("aEstaUrl/")
        // }else{
        //     hagoElPedidoDeTodosLosProductosPeroLePasoelID(resultado.id)
        // }

        // if(resultado.esUnObjetoVacio){
        //     hagoElPedidoDeTodosLosProductos("aEstaUrl/")
        // }else{
        //     hagoElPedidoDeTodosLosProductosPeroLePasoelID(resultado.id)
        // }
        
    // }, [id])


 
    // const [items, setItems] = useState([])
    // const [contador, setContador] = useState(0)
    // const [stock, setStock] = useState(5)

    // const aumentar = () => {
    // setContador(contador + 1)
    // contador >= stock ? setContador(contador + 0) : setContador(contador + 1)
    // }

    // const restar = () => {
    // setContador(contador - 1)
    // }
    
    // const getItemsAsync = () =>{
    //     fetch("https://fakestoreapi.com/products")
    //     .then(res=>res.json())
    //     .then((resp)=>{
    //         console.log(resp);
    //         setItems(resp)
    //     });
    // }
    // new Promise(resolve => 
    //     setTimeout(
    //         () => resolve({items: items_data}),
    //         2000 
    //     )
    
    // );
   

