import Cards from "./Cards"
import Footeruniv from "./Footeruniv"
import Navbarunive from "./Navbarunive"
import { Link } from "react-router-dom"


function Raspberry(){

    return(
    
    <>

<Navbarunive></Navbarunive>

<div className="  z-10w-[180px] h-[50px] xl:w-[330px] xl:h-[100px]">
<h1 className=" text-[44px] md:text-[55px] md:mt-[-25px] mt-[-8px] xl:text-[70px] text-left">Raspberry</h1>
</div>

<div className="w-[300px] h-[100px] xl:w-[480px] xl:h-[130px] mt-10 md:w-[400px]">
<p className=" text-[20px] mt-[-8px] md:text-[27px] xl:text-[32px] text-left">Qui potete trovare tutte le guide su tutto quello che riguarda Raspberry.</p>
</div>

<div className="w-[100px] h-[100px] ">
<Link to="/Web Server con Raspberry">  
<Cards imgsvg="Mimmo logo.svg" titolo=" Web server con Raspberry" descrizione="Creare un web server usando Raspberry"></Cards>
</Link>  
</div>

<Footeruniv></Footeruniv>




    </>
    
    )
    
    }

    
    export default Raspberry