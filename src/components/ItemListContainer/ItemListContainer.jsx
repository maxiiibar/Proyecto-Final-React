import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db";

import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "productos")

    getDocs(productosRef)
    .then((respuesta) => {
      let productosDb = respuesta.docs.map ((productos) => {
        return { id: productos.id, ...productos.data() }
      })
      setProductos(productosDb)
    })
    .catch ((error) => console.log(error))
  },[categoria]);

  return (
    <div className="itemListContainer">
      <h2>PRODUCTOS DESTACADOS</h2>
      <ItemList productos={productos}/>
    </div>
  );
};

export default ItemListContainer;
