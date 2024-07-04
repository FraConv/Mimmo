import { useState } from "react";
import { Link } from "react-router-dom";

function Navbarunive(){

const[menu, setMenu]=useState("mt-[-200px]");

const click=()=>{
setMenu(prevMenu => prevMenu === "mt-[-200px]" ? "mt-[45px]" : "mt-[-200px]" );

};

    return(
    
    <>
    
<header className=" w-[100%] h-16 left-0 top-0 fixed bg-[#2b1f26]   xl:h-50">

<div className=" w-[100%] h-24 left-0 top-0 fixed z-20 bg-[#2b1f26] xl:h-20"></div>

<div className="border-transparent border-2 w-[50px] h-[50px] ml-3">
<Link to="/">
<img className=" mt-[11px] z-40 fixed w-[73px] h-[73px] ml-[18px] " src="Mimmo Logo.svg" alt="" />
</Link>
</div>


<ul className=" grid grid-cols-3 border-transparent mt-[30px] max-[1000px]:hidden bg-none z-40 fixed">
<Link className="w-2 ml-[1200px] border-transparent text-black hover:text-black xl:ml-[695px] min-[1400px]:ml-[1180px] min-[1400px]:mt-[-50px]  xl:mt-[-50px]" to="/">
<li className="text-[20px]">Home</li>
</Link>
<Link className="w-2 ml-[800px] border-transparent text-black hover:text-black xl:ml-[450px] min-[1400px]:ml-[745px] min-[1400px]:mt-[-50px] min-[1351px]:ml-[420px] xl:mt-[-50px]" to="/Raspberry">
<li className="text-[20px]">Raspberry</li>
</Link>
<Link className="w-2 ml-[450px] border-transparent text-black hover:text-black xl:ml-[250px] min-[1400px]:ml-[370px] min-[1400px]:mt-[-50px] min-[1351px]:ml-[190px] xl:mt-[-50px]" to="/Python">
<li className="text-[20px]">Python</li>
</Link>
</ul>

<div className=" w-[600px] h-10 bg-[#f9b65d] ml-[1175px] mt-[25px] skew-x-[400deg] xl:ml-[630px] min-[1400px]:ml-[1130px] rounded-md fixed z-30 min-[1400px]:mt-[-25px] xl:mt-[-25px]"></div>

<div className="grid grid-rows-3 fixed z-40 right-6 top-9 w-10 h-10 xl:hidden" onClick={click}>
<div className="bg-[#e2b330] w-7 h-1 rounded-full mt-[3px]"></div>
<div className="bg-[#e2b330] w-5 h-1 rounded-full ml-2"></div>
<div className="bg-[#e2b330] w-3 h-1 rounded-full mt-[-3px] ml-4"></div>
</div>

<ul className={`grid grid-rows-3  mt-[-200px] bg-[#22121b] w-[100%] h-28 left-0 fixed z-10 p-1 xl:hidden transition-all duration-500 ${menu}`}>
<Link className="text-white hover:text-white" to="/">
<li className="ml-[-332px] p-[5px] min-[375px]:ml-[-300px] md:ml-[-645px] hover:text-black">Home</li>
</Link>
<Link className="text-white hover:text-white" to="/Raspberry">
<li className="ml-[-302px] p-[5px] min-[375px]:ml-[-252px] md:ml-[-600px]">Raspberry</li>
</Link>
<Link className="text-white hover:text-white" to="/Python">
<li className="ml-[-322px] p-[5px] min-[375px]:ml-[-280px] md:ml-[-630px]">Python</li>
</Link>
</ul>

</header>

    </>
    
    );
    
    };

    export default Navbarunive;