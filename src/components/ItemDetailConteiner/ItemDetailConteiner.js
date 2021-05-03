import { useParams } from 'react-router'
import { ItemList } from "../ItemList/ItemList"
import "./ItemDetailConteiner.css"


export function ItemDetailConteiner() {
  const { productId } = useParams()



  function getProducts(productId) {
    const detailProduct = ItemList.find((product) => product.id === productId)
    return detailProduct
  }

  return (
    <div className="detailContainer">
      <div className="bodyDetail">
      <p className="titleDetail">{getProducts(productId).name}</p>
      <img className="imageDetail" src={getProducts(productId).image} />
      </div>
      <div className="areaDetail">
      <p className="descriptionDetail">Soy un buen producto</p>
      <p className="priceDetail">$ {getProducts(productId).price}</p>
      </div>
    </div>
  )
}