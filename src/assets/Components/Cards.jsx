import { Link } from "react-router-dom";

function Cards({imgsvg,titolo,descrizione}){

    return(

    <>
<div className="  xl:w-[180px] xl:h-[260px] w-[140px] h-[200px] rounded-b-[50px] xl:rounded-b-[65px] mt-32 bg-[#f9b65d] hover:xl:h-[300px] hover:xl:rounded-b-[100px] transition-all duration-300">   
<img className="  w-[260px] h-[60px] bg-black mt-[-60px]" src={imgsvg} alt="" />
<div className=" grid grid-cols-1 gap-4 p-2">
<h5 className=" text-black xl:text-[16px] text-[13px] ">{titolo}</h5>
<h4 className=" text-black xl:text-[14px] text-[12px] ">{descrizione}</h4>
</div>
</div>

    </>
        
    );

};

export default Cards;