import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ( {children} ) => {
    const [carrito, setCarrito] = useState([])

    
    const añadirPrAlCarrito = (producto) => {
        const posicion = estaEnElCarrito(producto.id)
        if (posicion !== -1){
            carrito[posicion].cantidad = carrito[posicion].cantidad + producto.cantidad
            setCarrito([...carrito])
        }
        else{
            setCarrito([...carrito, producto])
        }
    }
    
    const totalCantidad = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad, 0)
    }
    
    const estaEnElCarrito = (idProducto) => {
        return carrito.findIndex((producto)=> producto.id === idProducto )
    }
    return (
        <CartContext.Provider value={{carrito, añadirPrAlCarrito, totalCantidad}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }