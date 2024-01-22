import { useContext } from 'react'

import { CartContext } from '../../context/CartContext'

import './ItemCarrito.css'

const ItemCarrito = ({ producto }) => {
    const { eliminarProducto } = useContext(CartContext)
    return (
        <article className="item-carrito">
            <div className='imagen-carrito'>
                <img src={producto.imagen} alt="" />
            </div>
            <div className='informacion-carrito'>
                <p>{producto.nombre} ({producto.cantidad})</p>
                <button onClick={()=>eliminarProducto(producto.id)}>Eliminar</button>
            </div>
            <div className="precio">
                <p>${producto.precio * producto.cantidad}</p>
            </div>
        </article>
    )
}

export default ItemCarrito