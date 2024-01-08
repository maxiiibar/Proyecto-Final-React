const ItemCarrito = ( {producto} ) => {
  return (
    <article>
        <div>
            <img src={producto.imagen} alt="" />
        </div>
        <div>
            <p>{producto.nombre}</p>
            <button>Eliminar</button>
        </div>
        <div>
            <button>-</button>
            <p>1</p>
            <button>+</button>
        </div>
        <div className="precio">
            <p>333333</p>
        </div>
    </article>
  )
}

export default ItemCarrito