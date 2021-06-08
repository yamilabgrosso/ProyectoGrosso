import "./ItemList.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { Item } from "../Item/Item"
import 'firebase/firestore';
import { getFirestore } from "../Firebase/Index"
import "./ItemList.css"

export const ItemList = () => {
  const [items, setItems] = useState([])
  const [isEmpty, setIsEmpty] = useState(false)

  useEffect(() => {
    const db = getFirestore()
    const ItemCollection = db.collection("Items")
    ItemCollection
    .get()
    .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          setIsEmpty(true);
        }
        const data = (querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })))
        setItems(data)
      })
      .catch((error) => console.log("Firestore error:", error));
  }, []);

  return (
    <div className='cardContainer'>
      {isEmpty ? (
        <p>No hay nada aquí</p>
      ) : (
        items.map((product) =>
          <div key= {product.id}>
            <Item 
              productId={product.id}
              name={product.name}
              picture={product.image}
              price={`$ ${product.price}`}
            />
          </div>
        ))
      }
    </div >
  )
}
