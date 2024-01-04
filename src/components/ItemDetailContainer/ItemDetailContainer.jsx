import { useEffect, useState } from "react";
import obtenerProductos from "../Utilidades/data";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    obtenerProductos
      .then((respuesta) => {
        const productoEncontrado = respuesta.find(
          (elemento) => elemento.id === id
        );
        setProducto(productoEncontrado);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="contenedor">
      <div className="itemDetailContainer">
      <ItemDetail producto={producto} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
