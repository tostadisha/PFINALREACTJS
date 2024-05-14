let productos = [
  {
    id: 1,
    nombre: "HyperX Alloy FPS Origins Core",
    precio: 91989,
    stock: 5,
    tipo: "teclado",
    fuente: "/src/assets/products/ID1.png",
  },
  {
    id: 2,
    nombre: "HyperX Cloud Alpha",
    precio: 116599,
    stock: 5,
    tipo: "auricular",
    fuente: "/src/assets/products/ID2.png",
  },
  {
    id: 3,
    nombre: "HyperX Cloud Flight",
    precio: 96000,
    stock: 3,
    tipo: "auricular",
    fuente: "/src/assets/products/ID3.png",
  },
  {
    id: 4,
    nombre: "HyperX Pulsefire Surge",
    precio: 43990,
    stock: 3,
    tipo: "mouse",
    fuente: "/src/assets/products/ID4.png",
  },
  {
    id: 5,
    nombre: "Logitech G PRO TKL",
    precio: 124829,
    stock: 7,
    tipo: "teclado",
    fuente: "/src/assets/products/ID5.png",
  },
  {
    id: 6,
    nombre: "Logitech G PRO X SUPERLIGHT",
    precio: 160000,
    stock: 3,
    tipo: "mouse",
    fuente: "/src/assets/products/ID6.png",
  },
  {
    id: 7,
    nombre: "Logitech G203",
    precio: 35000,
    stock: 3,
    tipo: "mouse",
    fuente: "/src/assets/products/ID7.png",
  },
  {
    id: 8,
    nombre: "Logitech G733",
    precio: 192000,
    stock: 3,
    tipo: "auricular",
    fuente: "/src/assets/products/ID8.png",
  },
];

const getProducts = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, time);
  });
};

export default getProducts;
