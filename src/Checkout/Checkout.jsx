import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";


const Checkout = () => {

    const {carrito, calcularTotal} = useContext(CartContext);

    const [values, setValues] = useState({
        nombre: "",
        apellido: "",
        email: "",
        tel: "",
    });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    const orden = {
        buyer: {
            ...values
        },
        items: carrito,
        total: calcularTotal()
    }
// .map((el) => {({id: el.id, precio: el.precio, nombre:  el.quantity})}),

    console.log(orden);
    };

    return ( 

            <div>
                <h2>Complete sus datos</h2>
                <hr/>

                <div className="container my-5">
                    <form onSubmit={handleSubmit}>
                        <h2>Formulario</h2>
                        <input 
                            className="form-control my-2"
                            type="text"
                            placeholder="Nombre"
                            name="nombre"
                            value={values.nombre}
                            onChange={handleInputChange}
                        />
                    {values.nombre.length === 0 && <small>Este campo es obligaotrio</small>}            

                        <input 
                            className="form-control my-2"
                            type="text"
                            placeholder="Apellido"
                            name="apellido"
                            value={values.apellido}
                            onChange={handleInputChange}
                        />
                    {values.apellido.length === 0 && <small>Este campo es obligaotrio</small>}            

                            <input 
                            className="form-control my-2"
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                    {values.email.length === 0 && <small>Este campo es obligaotrio</small>}  

                    <input 
                            className="form-control my-2"
                            type="text"
                            placeholder="Teléfono"
                            name="tel"
                            value={values.tel}
                            onChange={handleInputChange}
                        />
                    {values.tel.length === 0 && <small>Este campo es obligaotrio</small>}  
                    <br/>

                    <button className="btn btn-primary my-2" type="submit">Finalizar</button>          
                                            
                    </form>
                </div>
            </div>
    );
}
export default Checkout;

//min 25 clase 7