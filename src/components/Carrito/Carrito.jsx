import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCarrito from "../ItemCarrito/ItemCarrito"

const Carrito = () => {
  const { carrito } = useContext(CartContext)

  return (
    <section>
      {
        carrito.map((producto)=> <ItemCarrito producto={producto} key={producto.id}/>)
      }
    </section>
  )
}

export default Carrito