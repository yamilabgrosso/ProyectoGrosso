import { useState } from 'react';

export const Search = (Items) => {

  const [busqueda, setBusqueda] = useState("")
  const [result, setResult] = useState("")
  console.log(Items)
  console.log(busqueda)

  const products = ["remera", "gorra", "camiseta"]

  const change = async event => {
    await setBusqueda(event.target.value)
    await setResult(products.filter(product => product.includes(busqueda)))
  }

  const goProduct = () => {
    console.log("apreto")
  }


  return (
    <div className="seekee">
      <input
        className="search"
        type="search"
        placeholder="Search products"
        value={busqueda}
        onChange={change}
      />
      { result && result.map(res => 
      <div> <span onClick={goProduct}>{res}</span></div>)}
      <button  className="">Search</button>
    </div>
  )

}