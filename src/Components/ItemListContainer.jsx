import ItemList from "./ItemList"
// import { useParams } from "react-router-dom"
// import { useEffect, useState  } from "react"


const ItemListContainer = () => {
    
    // const resultado = useParams()
    // console.log(resultado)
    // console.log("muetra componente")

    // const [productos, setProductos] = useState([])
    

    // useEffect(() => {
       
    //    console.log("Aca hago el pedido")
    //     // if(resultado.esUnObjetoVacio){
    //     //     hagoElPedidoDeTodosLosProductos("aEstaUrl/")
    //     // }else{
    //     //     hagoElPedidoDeTodosLosProductosPeroLePasoelID(resultado.id)
    //     // }
        
    // }, [])

    return ( 
        <>
            <ItemList />
        </>
     );
}
 
export default ItemListContainer;