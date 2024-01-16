import './ItemCarrito.css'

const ItemCarrito = ( {producto} ) => {
  return (
    <article className="item-carrito">
        <div className='imagen-carrito'>
            <img src={producto.imagen} alt="" />
        </div>
        <div className='informacion-carrito'>
            <p>{producto.nombre}</p>
            <button>Eliminar</button>
        </div>
        <div className='botones-carrito'>
            <button>-</button>
            <p>{producto.cantidad}</p>
            <button>+</button>
        </div>
        <div className="precio">
            <p>${producto.precio*producto.cantidad}</p>
        </div>
    </article>
  )
}

export default ItemCarrito