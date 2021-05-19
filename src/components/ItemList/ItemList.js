import "./ItemList.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { Item } from "../Item/Item"
import { getFirestore } from "../Firebase/Index"

export const ItemList = () => {
  const [items, setItems] = useState([])
  const [isEmpty, setIsEmpty] = useState(false)

  useEffect(() => {
    const db = getFirestore()
    const ItemCollection = db.collection("Items")
    ItemCollection.get()
    .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          setIsEmpty(true);
        }
        setItems(querySnapshot.docs.map((doc) => doc.data()))
      })
      .catch((error) => console.log("Firestore error:", error));
  }, []);

  return (
    <div className='cardConteiner'>
      {isEmpty ? (
        <p>No hay nada aquí</p>
      ) : (
        items.map((product) =>
          <div>
            <Item
              key={product.id}
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
