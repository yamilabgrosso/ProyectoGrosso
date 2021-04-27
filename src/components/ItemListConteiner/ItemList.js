import "./ItemList.css"

export const ItemList = async() =>{
  
    try{
        const res = await setTimeout(() =>{

        },2000) fetch()
        const data= await res.json()
        console.log(data)
    }

    catch(error){
        console.log("error" , error)
    }
}