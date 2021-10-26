import ItemList from "./ItemList"
// import { useParams } from "react-router-dom"
import { useEffect, useState  } from "react"


const ItemListContainer = () => {
    
    const [items, setItems] = useState([])
 
    
    const getItemsAsync = () =>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then((res)=>{setItems(res)
        });
    }

     useEffect(() => {
        getItemsAsync();
        
    
    },[]);
    return ( 
        <>
            <ItemList items={items} />
        </>
     );
}
 
export default ItemListContainer;