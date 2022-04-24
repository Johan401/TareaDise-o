import { db } from './firebase';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

//Conexion a FireBase
function Conexion() {
  const [data, setData] = useState([]);
  const newmarca = []
  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await getDocs(collection(db, 'Nike'));
      newmarca = datos.map((documento) => {       
        return documento.data();
      });
    };
    obtenerDatos();
  }, []);

  // Obtener datos de las colecciones
  async function getData() {      
    //Referencia a las colecciones que tenemos:
    const productosRef = collection(db, 'productos');           
            
    const productosSnapshot = await getDocs(productosRef);

    const productosList = productosSnapshot.docs.map(doc => doc.data());

    setData(productosList);    
  } 


  useEffect(() => {
    getData();
  }, []);

  //Elijo dentro del array los datos que quiero de FireBase
  const newarray = data.map(x=>x.nombre)

  return (
      <div>
          <h1>{newarray}</h1>
      </div>
  );
}

export { Conexion };
