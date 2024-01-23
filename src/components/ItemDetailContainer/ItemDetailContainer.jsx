import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"
import { BarLoader } from "react-spinners"
import ItemDetail from "../ItemDetail/ItemDetail";
import db from "../../db/db";

import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true);
  const [productoNoExiste, setProductoNoExiste] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    setCargando(true)
    const productoRef = doc(db, "productos", id)
    getDoc(productoRef)
      .then((respuesta) => {
        const productoDb = { id: id, ...respuesta.data() }
        if (!respuesta.exists()) {
          setProductoNoExiste(true)
        }
        setProducto(productoDb)
      })
      .catch((error) => console.log(error))
      .finally(() => setCargando(false))
  }, [id]);

  console.log(cargando)
  return (
    <div className="contenedor" style={cargando ? {alignItems:"center"}: ({})}>
      {
        productoNoExiste ? (
          <div className="pr-no-existe">
            <h2>Oops...</h2>
            <h3>Este producto no existe 😭</h3>
          </div>
        ) : (
          cargando ? (
            <BarLoader color="white" />
          ) :(
            <div className="itemDetailContainer">
            <ItemDetail producto={producto} />
            </div>
          )
        )
      }
    </div>
  );
};

export default ItemDetailContainer;