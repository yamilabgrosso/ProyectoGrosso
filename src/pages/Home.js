import { Navbar } from "../../src/components/Navbar/Navbar"
import { ItemListConteiner } from "../../src/components/ItemListConteiner/ItemListConteiner"

export function Home() {

  const greeting = [
    {
      saludo: "Bienvenidos",
    }
  ]

  return (
  
          <div>
            <Navbar />
            <ItemListConteiner
              saludo={greeting[0].saludo}


            />
          </div>
    )
    }
  