import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const añadirPrAlCarrito = (producto) => {
        const condicion = estaEnElCarrito(producto.id);
        if (condicion) {
            //logica para sumar la cantidad si el producto ya estaba agregado
            const productosModificados = carrito.map((productoCarrito) => {
                if (productoCarrito.id === producto.id) {
                    return {
                        ...productoCarrito,
                        cantidad: productoCarrito.cantidad + producto.cantidad,
                    };
                } else {
                    return productoCarrito;
                }
            });

            setCarrito(productosModificados);
        } else {
            setCarrito([...carrito, producto]);
        }
    };

    const totalCantidad = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad, 0)
    }

    const estaEnElCarrito = (idProducto) => {
        return carrito.some((producto) => producto.id === idProducto);
      };

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

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const eliminarProducto = (idProducto) => {
        const copiaCarrito = carrito.splice()
        const indexId = carrito.findIndex((producto) => producto.id === idProducto);
        copiaCarrito.splice(indexId, 1);
        setCarrito([...copiaCarrito]);
    }
    return (
        <CartContext.Provider value={{ carrito, setCarrito, añadirPrAlCarrito, totalCantidad, totalPrecio, totalEnvio, vaciarCarrito, eliminarProducto }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }