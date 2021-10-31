import ItemDetail from "./ItemDetail"
import { useEffect, useState  } from "react"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    

    const resultado = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false)

    console.log(item)

    useEffect(() => {
        setLoading(true)
        if(Object.keys(resultado).length === 0 ){

            fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then((res)=>{setItem(res)
            })
            .finally(()=>{setLoading(false)});
         }else{

            fetch('https://fakestoreapi.com/products/' + resultado.id)
                .then(res=>res.json())
                .then(json=>setItem(json))   
                .finally(()=>{setLoading(false)});       
         }
    
    }, []) 


   
    return ( 
        <>
             <div>
                {loading ? (<div className="d-flex justify-content-center align-items-center" style={{ height: "88vh" }}>
                                <div className="spinner-border text-secondary justify-content-center" role="status">
                                    <span className="sr-only"></span>
                                </div>
                            </div>) 
                        : <ItemDetail item={item}/>}
                
            </div>
        </>
     );
}
 
export default ItemDetailContainer;

