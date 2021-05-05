import { useParams } from 'react-router'
import { Index } from "../Index"
import "./ItemDetailConteiner.css"
import { ItemDetail } from "../ItemDetail/ItemDetail"


export function ItemDetailConteiner() {
const { productId } = useParams()

  function getProducts(productId) {
    const detailProduct = Index.find((product) => product.id === productId)
    return detailProduct
  }

  return (
    <ItemDetail
      name={getProducts(productId).name}
      image={getProducts(productId).image}
      price={getProducts(productId).price}
    />
  )
}