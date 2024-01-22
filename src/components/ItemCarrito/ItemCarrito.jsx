import { useContext, useState } from 'react'

import { CartContext } from '../../context/CartContext'

import './ItemCarrito.css'

const ItemCarrito = ({ producto }) => {
    const [cantidad, setCantidad] = useState(producto.cantidad)
    const { setCarrito, eliminarProducto,carrito } = useContext(CartContext)

    if (cantidad===0){
        eliminarProducto(producto.id)
    }

    const restarUno = () => {
        setCantidad(cantidad-1)
        modificarProducto(false)
    }

    const sumarUno = () => {
        setCantidad(cantidad+1)
        modificarProducto(true)
    }

    const modificarProducto = (boolean) => {
        if (boolean){
            producto.cantidad=cantidad+1
        }
        else{
            producto.cantidad=cantidad-1
        }
        eliminarProducto(producto.id)
        setCarrito((carrito) => [...carrito, producto]);
    }
    
    return (
        <article className="item-carrito">
            <div className='imagen-carrito'>
                <img src={producto.imagen} alt="" />
            </div>
            <div className='informacion-carrito'>
                <p>{producto.nombre}</p>
                <button onClick={()=> (eliminarProducto(producto.id))}>Eliminar</button>
            </div>
            <div className='botones-carrito'>
                <button onClick={()=>restarUno()}>-</button>
                <p>{cantidad}</p>
                <button onClick={()=>sumarUno()}>+</button>
            </div>
            <div className="precio">
                <p>${producto.precio * cantidad}</p>
            </div>
        </article>
    )
}

export default ItemCarrito