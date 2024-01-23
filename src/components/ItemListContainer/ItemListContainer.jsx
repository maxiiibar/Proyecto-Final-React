import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { BarLoader } from "react-spinners"
import db from "../../db/db";
import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css";

const ItemListContainer = ({ encabezado }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    setCargando(true)
    const productosRef = collection(db, "productos");
    let consulta;
    if (categoria) {
      consulta = query(productosRef, where("categoria", "==", categoria));
    } else {
      consulta = productosRef;
    }
    getDocs(consulta)
      .then((respuesta) => {
        let productosDb = respuesta.docs.map((productos) => {
          return { id: productos.id, ...productos.data() };
        });
        setProductos(productosDb);
      })
      .catch((error) => console.log(error))
      .finally(()=> setCargando(false))
  }, [categoria]);

  return (
    <div className="itemListContainer" style={cargando ? { justifyContent: "center" } : (encabezado ? { height: "105vh" } : {})}>
      {
        cargando ?(
          <BarLoader color="white" />
        ):(
          <div className="encabezado">
            {
            encabezado ? (
              <h2>PRODUCTOS DESTACADOS</h2>
            ) : (
              <h2>{categoria.toUpperCase()}</h2>
            )
          }
          <ItemList productos={productos} />
          </div>
        )
      }
    </div>
  );
};

export default ItemListContainer;
