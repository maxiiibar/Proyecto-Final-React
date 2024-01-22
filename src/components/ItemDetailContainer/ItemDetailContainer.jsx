import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail";
import db from "../../db/db";

import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [productoNoExiste, setProductoNoExiste] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    const productoRef = doc(db, "productos", id)
    getDoc(productoRef)
      .then((respuesta) => {
        const productoDb = { id: id, ...respuesta.data() }
        if (!respuesta.exists()) {
          setProductoNoExiste(true)
        }
        setProducto(productoDb)
      })

  }, [id]);

  return (
    <div className="contenedor">
      {
        productoNoExiste ? (
          <div className="pr-no-existe">
            <h2>Oops...</h2>
            <h3>Este producto no existe 😭</h3>
          </div>
        ) : (
          <div className="itemDetailContainer">
            <ItemDetail producto={producto} />
          </div>
        )
      }
    </div>
  );
};

export default ItemDetailContainer;
