// import { Row } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import { Container,Col ,Row,Button} from "react-bootstrap"
import { useState } from "react"
import {Sidebar} from "./Sidebar"
import { Menbers } from "../../Menbers"
export const Home=()=>{
  const [m,setM]=useState(false)
    return(
    <Row>
        <div className="col-3">
             <div className="text-center ">
                <p className="h6">SUMIS</p>
             </div>
            <div className="mx-4"><Button variant="outline-primary my-3" onClick={()=>setM(!m)}>አባላት ቁጥጥር</Button></div>
            <div className="mx-4"><Button variant="outline-primary my-3">የገቢ እና የወጪ ቁጥጥር</Button> </div>
            <div className="mx-4"><Button variant="outline-primary my-3">የትምህርት  ቁጥጥር</Button></div>
            <div className="mx-4"> <Button variant="outline-primary my-3">የውጤት  ቁጥጥር</Button></div>
            <div className="mx-4"> <Button variant="outline-primary my-3"> የመርሐ ግብር ቁጥጥር</Button></div>
      </div>
      <div className="col-9">
         {m&&<Menbers/>}
      </div>
    </Row>)
}