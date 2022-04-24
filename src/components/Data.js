import { db } from '../data/firebase';
import { collection, getDocs } from 'firebase/firestore';

const productosTenis = collection(db, 'productos');
const getproductos = async (setData) => {
  const productoSnapshot = await getDocs(productosTenis);
  setData(
    productoSnapshot.docs.map((e) => ({ ...e.data(), id: e.id }))
  );
};

export { getproductos };
