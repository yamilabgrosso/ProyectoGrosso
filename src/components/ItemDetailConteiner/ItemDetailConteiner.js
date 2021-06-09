import { useParams } from 'react-router'
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useState, useEffect } from 'react'
import 'firebase/firestore';
import { getFirestore } from "../Firebase/Index"

export const ItemDetailConteiner = () => {

  const { productId } = useParams()
  const [item, setItem] = useState([])
  

  useEffect(() => {
    if(productId) {
        const getDetails = async () => {
            const db = getFirestore()
            const itemCollection = await db.collection('Items').doc(productId)
            const prod = await itemCollection.get()
            if(prod.exists) {
                setItem({
                  id: prod.id,
                  ...prod.data()})
            } 
        }
      getDetails()
    }
    }, [productId])

  return (
    <main>
      <ItemDetail
        product={item}
      />

    </main>
  )
}

export default ItemDetailConteiner