import { useParams } from 'react-router'
import { useState } from "react"
import { useEffect } from "react"
import { Item } from "../Item/Item"
import 'firebase/firestore';
import { getFirestore } from "../Firebase/Index"


export const Categories = () => {

  let { categoryId } = useParams()
  const [categories, setCategories] = useState([]);
  const [emptyCategory, setEmptyCategory] = useState(false)


  useEffect(() => {
    const db = getFirestore()
    const itemCollection = db.collection('Items')
    const cat = itemCollection.where("categoryId", "==", categoryId)
    cat
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          setEmptyCategory(true)
        }
        const data = (querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })))
        setCategories(data)
      })
  }, [categoryId]
  )

  return (

    <div className='cardConteiner'>
      {emptyCategory ? (
        <p>No hay nada en esta categoria</p>
      ) : (
        categories.map((product) =>
          <div key = {product.id}>
            <Item 
              productId={product.id}
              name={product.name}
              picture={product.image}
              price={`$ ${product.price}`}
            />
          </div>
        )
      )}
    </div>
  )
}
