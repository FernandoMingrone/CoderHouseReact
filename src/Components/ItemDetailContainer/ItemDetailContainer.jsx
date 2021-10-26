import ItemDetail from "./ItemDetail"
import { useEffect, useState  } from "react"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    

    const resultado = useParams()
    const [item, setItem] = useState({})

    console.log(item)

    useEffect(() => {
        if(Object.keys(resultado).length === 0 ){

            fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then((res)=>{setItem(res)
            });
         }else{

            fetch('https://fakestoreapi.com/products/' + resultado.id)
                .then(res=>res.json())
                .then(json=>setItem(json))          
         }
    
    }, []) 


   
    return ( 
        <>
            <ItemDetail item={item}/>
        </>
     );
}
 
export default ItemDetailContainer;

