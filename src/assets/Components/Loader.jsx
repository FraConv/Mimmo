import { useEffect, useState } from "react";

function Loader(){

const[Loader, setLoader]=useState("visible");

useEffect(()=>{

  const Timer=setTimeout(()=>{

  setLoader("hidden");

  }, 3000);

});

return(

  <>

<div className={`w-[100%] h-[100%] bg-[#2b1f26] z-50 fixed top-0  left-0 ${Loader} `}>

  <div className="grid grid-cols-4 xl:gap-[-9px] gap-[40px] xl:mt-[10%] mt-[50%] ml-[15%] xl:ml-[15%] md:ml-[20%]">
  <div className="bg-[#f9b65d] w-8 h-24 xl:mt-[27%] xl:ml-[144%] ml-[95%] md:ml-[100%] rounded-xl xl:animate-Loader1 animate-Loader1m "></div>
  <div className="bg-[#1b4455] w-8 h-24 xl:mt-[27%] xl:ml-[47%] ml-[15%] md:ml-[15%] rounded-xl xl:animate-Loader2 animate-Loader2m "></div>
  <div className="bg-[#f9b65d] w-8 h-24 xl:mt-[27%] xl:ml-[-49%] ml-[-75%] md:ml-[-75%] rounded-xl xl:animate-Loader3 animate-Loader3m "></div>
  <div className="bg-[#1b4455] w-8 h-24 xl:mt-[27%] xl:ml-[-145%] ml-[-155%] md:ml-[-160%] rounded-xl xl:animate-Loader4 animate-Loader4m "></div>
  </div>
 
</div>

  </>

);

};

export default Loader;