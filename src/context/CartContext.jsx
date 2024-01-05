import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ( {children} ) => {
    const [carrito, setCarrito] = useState([])

    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext}