import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";
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
let productos2 = [
  {
    id: 9,
    nombre: "Logitech M305 Pebble",
    precio: 42999,
    stock: 7,
    tipo: "mouse",
    fuente: "/src/assets/products/ID9.png",
  },
  {
    id: 10,
    nombre: "Logitech K380s Pebble",
    precio: 66059,
    stock: 2,
    tipo: "teclado",
    fuente: "/src/assets/products/ID10.png",
  },
  {
    id: 11,
    nombre: "Red Dragon Zeus",
    precio: 114299,
    stock: 1,
    tipo: "auricular",
    fuente: "/src/assets/products/ID11.png",
  },
];
const seedProducts = () => {
  productos2.map(({ id, ...rest }) => {
    addDoc(collection(db, "productos"), rest);
  });
};
seedProducts();
