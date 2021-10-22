import ItemDetail from "./ItemDetail"
import { useEffect, useState  } from "react"
import { useParams } from "react-router-dom"


const ItemDetailContainer = (props) => {
    

    const resultado = useParams()
    const [item, setItem] = useState({})



    useEffect(() => {
        //  console.log("PRIMER PASO")
        if(Object.keys(resultado).length === 0 ){
            //  console.log("SEGUNDO PASO A")
            //getItemsAsync()
            fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then((res)=>{setItem(res)
            });
         }else{
            //  console.log("SEGUNDO PASO B")
            //getItemDetailAsync()
            // console.log("ENTRAMOS ACA")
            // console.log(resultado)
            fetch('https://fakestoreapi.com/products/' + resultado.id)
                .then(res=>res.json())
                .then(json=>setItem(json))          
         }
    
    },[])


   
    return ( 
        <>
            <ItemDetail item={item}/>
        </>
     );
}
 
export default ItemDetailContainer;

