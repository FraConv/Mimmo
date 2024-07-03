import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(){

const[menu, setMenu]=useState("mt-[-200px]");

const click=()=>{
setMenu(prevMenu => prevMenu === "mt-[-200px]" ? "mt-[95px]" : "mt-[-200px]" )


};

    return(
    
    <>
    
<header className=" w-[100%] h-16 left-0 top-0 fixed bg-[#2b1f26] xl:h-50 ">

<div className=" w-[100%] h-24 left-0 top-0 fixed z-40 bg-[#2b1f26] xl:h-50 xl:hidden"></div>


<Link to="/">
<img className=" mt-[11px] z-40 fixed w-[73px] h-[73px] ml-[18px] " src="Mimmo Logo.svg" alt="" />
</Link>



<ul className=" grid grid-cols-3 border-transparent mt-[30px] max-[1000px]:hidden bg-none z-40 fixed">
<Link className="w-2 ml-[1200px] border-transparent text-black hover:text-black" to="/">
<li className="text-[20px]">Home</li>
</Link>
<Link className="w-2 ml-[800px] border-transparent text-black hover:text-black" to="/Raspberry">
<li className="text-[20px]">Raspberry</li>
</Link>
<Link className="w-2 ml-[450px] border-transparent text-black hover:text-black" to="/Python">
<li className="text-[20px]">Python</li>
</Link>
</ul>

<div className=" w-[600px] h-10 bg-[#f9b65d] ml-[1175px] mt-[25px] skew-x-[400deg] rounded-md fixed z-30"></div>

<div className="grid grid-rows-3 fixed z-40 right-6 top-9 w-10 h-10 xl:hidden" onClick={click}>
<div className="bg-[#f9b65d] w-7 h-1 rounded-full mt-[3px]"></div>
<div className="bg-[#f9b65d] w-5 h-1 rounded-full ml-2"></div>
<div className="bg-[#f9b65d] w-3 h-1 rounded-full mt-[-3px] ml-4"></div>
</div>

<ul className={`grid grid-rows-3  mt-[-200px] bg-[#22121b] w-[100%] h-28 left-0 fixed z-10 p-1 xl:hidden transition-all duration-500 ${menu}`}>
<Link className="text-white hover:text-white" to="/">
<li className="ml-[-332px] p-[5px] min-[375px]:ml-[-300px] md:ml-[-629px]">Home</li>
</Link>
<Link className="text-white hover:text-white" to="/Raspberry">
<li className="ml-[-302px] p-[5px] min-[375px]:ml-[-270px] md:ml-[-600px]">Raspberry</li>
</Link>
<Link className="text-white hover:text-white" to="/Python">
<li className="ml-[-322px] p-[5px] min-[375px]:ml-[-290px] md:ml-[-619px]">Python</li>
</Link>
</ul>

<img className=" opacity-0 xl:mt-[-990px] xl:ml-[590px] ml-28 mt-7 xl:opacity-80 " src="sfondo sito.svg" alt="" />

<img className=" mt-[-560px] ml-[-10px] md:mt-[-1419px] xl:mt-[1419px]" src="sfondo sito3.svg" alt="" />

</header>

    </>
    
    );
    
    };
    export default Navbar;