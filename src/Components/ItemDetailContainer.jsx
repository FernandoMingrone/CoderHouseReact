import ItemDetail from "./ItemDetail"
import { useEffect, useState  } from "react"
import { useParams } from "react-router-dom"


const ItemDetailContainer = (props) => {
    

    const resultado = useParams()
    const [item, setItem] = useState({})
    // const [identificador] = props.match.params.id;

    // const getItemsAsync = () =>{
    //     fetch("https://fakestoreapi.com/products")
    //     .then(res=>res.json())
    //     .then((res)=>{setItem(res)
    //     });
    // }

    // const getItemDetailAsync = () =>{
    //     fetch(`https://fakestoreapi.com/products${resultado.id}`)
    //     .then(res=>res.json())
    //     .then((res)=>{setItem(res)
    //     });
    // }
  
    //  useEffect(() => {
    //     if(Object.keys(resultado).length === 0 ){
    //          getItemsAsync()
    //      }else{
    //          getItemDetailAsync()
    //      }
    
    // },[])

    useEffect(() => {
         console.log("PRIMER PASO")
        if(Object.keys(resultado).length === 0 ){
             console.log("SEGUNDO PASO A")
            //getItemsAsync()
            fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then((res)=>{setItem(res)
            });
         }else{
             console.log("SEGUNDO PASO B")
            //getItemDetailAsync()
            console.log("ENTRAMOS ACA")
            console.log(resultado)
            fetch('https://fakestoreapi.com/products/' + resultado.id)
                .then(res=>res.json())
                .then(json=>setItem(json))          
         }
    
    },[])

    const [contador, setContador] = useState(0)
    const [stock, setStock] = useState(5)

 console.log(setStock)
    const aumentar = () => {
    setContador(contador + 1)
    contador >= stock ? setContador(contador + 0) : setContador(contador + 1)
    }

    const restar = () => {
    setContador(contador - 1)
    }
    return ( 
        <>
            <ItemDetail id={item.id} category={item.category} price={item.price} title={item.title} image={item.image} contador={contador} aumentar={aumentar} 
                            restar={restar}
                            stock={item.stock} item={item}/>
        </>
     );
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
    // // const [contador, setContador] = useState(0)
    // // const [stock, setStock] = useState(5)

    // // const aumentar = () => {
    // // setContador(contador + 1)
    // // contador >= stock ? setContador(contador + 0) : setContador(contador + 1)
    // // }

    // // const restar = () => {
    // // setContador(contador - 1)
    // // }
    
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
   

