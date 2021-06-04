import lupa from "../../lupa.png";
import { useState } from 'react';

export const Search = () =>{

const  [busqueda, setBusqueda] = useState("") 

console.log(busqueda)
    return(
        <div className="seeker">
        <input 
        className="search" 
        type="search" 
         placeholder="Search" 
         value={busqueda}
         onChange= {(e) => setBusqueda(e.target.value)} 
         />
        <img src={lupa} className="lupa" alt="lupa" />
      </div>
    )

}