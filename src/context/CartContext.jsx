import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const añadirPrAlCarrito = (producto) => {
        const posicion = estaEnElCarrito(producto.id)
        if (posicion !== -1) {
            carrito[posicion].cantidad = carrito[posicion].cantidad + producto.cantidad
            setCarrito([...carrito])
        }
        else {
            setCarrito([...carrito, producto])
        }
    }

    const totalCantidad = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad, 0)
    }

    const estaEnElCarrito = (idProducto) => {
        return carrito.findIndex((producto) => producto.id === idProducto)
    }

    const totalPrecio = () => {
        return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)
    }

    const totalEnvio = () => {
        return carrito.reduce((total, producto) => {
            if (producto.envio) {
                return total + producto.envio
            }
            else {
                return total
            }
        }, 0)
    }

    const eliminarProducto = (idProducto) => {
        const productosFiltrados = carrito.filter(
            (producto) => producto.id !== idProducto
        );
        setCarrito(productosFiltrados);
    }
    const vaciarCarrito = () => {
        setCarrito([])
    }
    return (
        <CartContext.Provider value={{ carrito, añadirPrAlCarrito, totalCantidad, totalPrecio, totalEnvio, vaciarCarrito, eliminarProducto }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }