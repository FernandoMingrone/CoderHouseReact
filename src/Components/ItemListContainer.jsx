import ItemList from "./ItemList"
// import { useParams } from "react-router-dom"
import { useEffect, useState  } from "react"


const ItemListContainer = () => {
    
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
        .then((res)=>{setItems(res)
        });
    }

    console.log(items)
  
     useEffect(() => {
        getItemsAsync();
        
    
    },[])
    return ( 
        <>
            <ItemList items={items} contador={contador} aumentar={aumentar} restar={restar}/>
        </>
     );
}
 
export default ItemListContainer;



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
