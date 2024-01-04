const productos = [
  {
    id: "hgt344",
    nombre: "Logitech G Series G435",
    descripcion:
      "Auriculares gamer inalámbricos Logitech G Series G435 negro y amarillo fluorescente",
    stock: 10,
    precio: 122580,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_689059-MLU72577252918_112023-O.webp",
    categoria: "auriculares",
    envioGratis: true,
  },
  {
    id: "ljm322",
    nombre: "Logitech G Series G733",
    descripcion:
      "Auriculares gamer inalámbricos Logitech G Series G733 negro con luz rgb LED",
    stock: 10,
    precio: 319989,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_760857-MLA44771394445_022021-O.webp",
    categoria: "auriculares",
    envioGratis: false,
  },
  {
    id: "jht332",
    nombre: "Logitech Serie G G915",
    descripcion:
      "Teclado gamer bluetooth Logitech Serie G G915 TKL QWERTY GL Tactile inglés color carbón con luz RGB",
    stock: 10,
    precio: 267399,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_939703-MLA43754579245_102020-O.webp",
    categoria: "teclados",
    envioGratis: true,
  },
  {
    id: "wes236",
    nombre: "Logitech G Series Lightsync G203",
    descripcion: "Mouse gamer de juego Logitech G Series Lightsync G203 negro",
    stock: 9,
    precio: 47390,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_605478-MLU72756924884_112023-O.webp",
    categoria: "mouses",
    envioGratis: false,
  },
  {
    id: "kmt866",
    nombre: "Blue Yeti",
    descripcion:
      "Micrófono Blue Yeti Condensador Omnidireccional color blackout",
    stock: 15,
    precio: 214999,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_819872-MLA50186686056_062022-O.webp",
    categoria: "microfonos",
    envioGratis: true,
  },
  {
    id: "khg522",
    nombre: "Logitech G440",
    descripcion:
      "Mouse Pad gamer Logitech G440 Serie G de goma 280mm x 340mm x 3mm negro",
    stock: 3,
    precio: 22500,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_854109-MLU72644549083_112023-O.webp",
    categoria: "mousepads",
    envioGratis: true,
  },
  {
    id: "prw092",
    nombre: "Lightspeed G305",
    descripcion:
      "Mouse gamer inalámbrico Logitech Serie G Lightspeed G305 black",
    stock: 10,
    precio: 59999,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_632053-MLU72776067283_112023-O.webp",
    categoria: "mouses",
    envioGratis: false,
  },
  {
    id: "ujm422",
    nombre: "Logitech Pro Series G Pro",
    descripcion:
      "Teclado gamer Logitech Pro Series G Pro QWERTY GX Blue Clicky inglés US color negro con luz RGB",
    stock: 5,
    precio: 239208,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_757719-MLA52349939112_112022-O.webp",
    categoria: "teclados",
    envioGratis: false,
  },
];

const obtenerProductos = new Promise((resolve, reject) => {
  //Simulamos un retraso de red
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

export default obtenerProductos;
