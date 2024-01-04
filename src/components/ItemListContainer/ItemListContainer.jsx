import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import obtenerProductos from "../Utilidades/data";
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    obtenerProductos
      .then((respuesta) => {
        if (categoria) {
          const filtrado = respuesta.filter(
            (producto) => producto.categoria === categoria
          );
          setProductos(filtrado);
        } else {
          setProductos(respuesta);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },[categoria]);

  return (
    <div className="itemListContainer">
      <ItemList productos={productos}/>
    </div>
  );
};

export default ItemListContainer;
