import { useParams } from 'react-router'
import { Index } from "../Index"
import "./ItemDetailConteiner.css"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useState, useEffect } from 'react'

export const ItemDetailConteiner = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState([])
 
  
  useEffect(() => {
    const productFind = Index.find((product) => product.id === productId)
    setProduct(productFind)

  }, [productId])

  return(
    <main>
      <ItemDetail 
        props={product}
        product={product}
      />

    </main>
  )
}