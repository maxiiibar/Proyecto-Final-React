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
  const [cant, setCant] = useState();
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
        let productosDb = respuesta.docs.splice(0, 8)
        productosDb = productosDb.map((productos) => {
          return { id: productos.id, ...productos.data() };
        });
        setProductos(productosDb);
        setCant(productosDb.length)
      })
      .catch((error) => console.log(error))
      .finally(() => setCargando(false))
  }, [categoria]);

  return (
    <div className="itemListContainer" style={cargando ? { justifyContent: "center", height: "calc(100vh - 70px)" } : (cant > 4 ? { height: "120vh" } : { height: "calc(100vh - 70px)" })}>
      {cargando ? (
        <BarLoader color="white" />
      ) : (
        <>
          <div className="encabezado">
            {encabezado ? (
              <h2>PRODUCTOS DESTACADOS</h2>
            ) : (
              <h2>{categoria.toUpperCase()}</h2>
            )}
          </div>
          <ItemList productos={productos} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
