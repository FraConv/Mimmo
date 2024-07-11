import Footer from "./Footer"
import Loader from "./Loader"
import MatrixCode from "./Matrixcode"
import MatrixCode2 from "./Matrixcode2"
import Navbar from "./Navbar"

function Home(){

    return(
    
    <>

<Loader></Loader>

<Navbar></Navbar>


<div className="ml-[-900px] mt-[-100px] xl:mt-[-200px] xl:ml-[-900px] min-[1400px]:ml-[-985px] md:ml-[-100px] fixed opacity-75 ">
<MatrixCode></MatrixCode>
</div>

<div className=" fixed left-0 w-[100%] h-[60%] mt-[-65px] bg-gradient-to-t from-black">
    <h1 className=" min-[360px]:text-[50px] text-white md:text-[45px] min-[375px]:text-[35px] min-[375px]:mt-[40px] xl:ml-[35px] min-[1400px]:ml-[35px] ml-[22px] text-left text min-[412px]:mt-[-50px] min-[412px]:text-[40px] leading-[43px] min-[390px]:text-[43px] 
    min-[390px]:mt-[-50px] xl:text-[71px]">MIMMOSOFTWEB</h1>
    </div>

    <div className=" fixed z-30 left-0 w-[330px] xl:w-[890px] h-[120px] mt-[100px] md:w-[400px]">
    <p className=" text-white md:text-[30px] ml-[22px] xl:ml-[35px] min-[375px]:mt-[-50px] text-left min-[375px]:text-[18px] min-[412px]:mt-[-80px] min-[412px]:text-[25px] min-[390px]:text-[25px] 
    xl:text-[34px] min-[390px]:mt-[-50px]">Il posto giusto per guide professionali su Raspberry, Python e MySQL.
    </p>
</div>

<Footer imgsvg="sfondo sito2.svg" ></Footer>

    </>
    
    )
    
    }
    export default Home