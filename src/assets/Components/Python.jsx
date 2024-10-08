
import Navbarunive from "./Navbarunive"
import { Link } from "react-router-dom"
import Cards from "./Cards"
import Footeruniv from "./Footeruniv"


function Python(){

    return(
    
    <>

<Navbarunive></Navbarunive>

<div className="w-[180px] h-[50px] xl:w-[330px] xl:h-[100px]">
<h1 className=" text-[white] md:text-[55px] md:mt-[200px] text-[44px] mt-[200px] xl:text-[70px] text-left  xl:mt-[100px]">Python</h1>
</div>

<div className="w-[300px] h-[100px] xl:w-[480px] xl:h-[130px] mt-10 md:w-[400px]">
<p className="text-[white] text-[20px] md:text-[27px] mt-[-8px] xl:text-[32px] text-left">Qui potete trovare tutte le guide su tutto quello che riguarda Python.</p>
</div>

<div className="w-[100px] h-[100px] ">
<Link to="/Accesso remoto a DBMySQL">  
<Cards imgsvg="Mimmo logo.svg" titolo="Accesso remoto a DB MySQL" descrizione="Creare un accesso remoto al DB usando Python."></Cards>
</Link>  
</div>

<div className=" xl:w-10 xl:h-[500px]"></div>

<div className="mt-[800px] :w-[375px] h-[80px] bg-transparent]"></div>

<Footeruniv></Footeruniv>


    </>
    
    )
    
    }
    export default Python