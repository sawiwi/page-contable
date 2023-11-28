import React from "react";

import logoHidraulica from '../../assets/img/logo-hidraulica.jpg'

const OurClients = () =>{
    return(
        <div id="OurServicesScroll">
            <div  className=" xl:max-w-[1200px] xl:mx-auto ">
                <div  className="mx-10 my-28">   
                    <div className='py-10'>
                        <h1 className='text-center font-bold text-5xl'>Nuestros clientes</h1>
                        <p className='text-center text-lg my-2'>¿Conoces alguno?</p>
                    </div> 
                    <div className="flex my-10 mt-1" >
                        <div className="flex-1 h-16 rounded-lg xl:h-28 hover:scale-110 transition-all duration-150 ">
                            <a href="https://accionpanal.cl/"  target="_blank" rel="noreferrer">
                                <img src="https://accionpanal.com/_next/static/media/accion-panal-logo.21d16b96.webp" className="xl:w-64 h-auto" alt="Logo Panal"></img>
                            </a>
                        </div>
                        <div className="shrink-0 h-16 w-80 m-4 xl:mt-10 hover:scale-110 transition-all duration-150">
                            <a href="https://aulenpropiedades.cl/"  target="_blank" rel="noreferrer">
                                <img src="https://aulenpropiedades.cl/static/media/logoAulen.0aff8f045048e610b59f.png" className="xl:w-64 h-auto" alt="Logo Aulen"></img>
                            </a>                      
                        </div>
                        <div className="flex-1 h-16 m-4 hover:scale-110 transition-all duration-150">
                            <a href="https://unne.cl/"  target="_blank" rel="noreferrer">
                                <img src="https://unnepropiedades.cl/assets/img/global/logo.png" className="xl:w-64 h-auto" alt="Logo Unne"></img>
                            </a>   
                        </div>
                    </div> 
                    <div className="flex pl-36 pr-36 pb-36">
                        <div className="flex-1 h-16 m-4 hover:scale-110 transition-all duration-150">
                            <a href="https://www.truecapital.cl/"  target="_blank" rel="noreferrer">
                                <img src="https://www.truecapital.cl/wp-content/uploads/2021/05/Variante_TrueCapital_RGB.png" className="mt-10" alt="Logo Unne"></img>
                            </a> 
                        </div>
                        {/* <div className="shrink-0 h-16 w-80 m-4">
                            <div className="bg-primary-default rounded-lg h-28"> 
                                    xdxdxdd 2
                                </div>
                        </div> */}
                        <div className="flex-1 h-16 m-4 ">
                            <a href="https://mhidraulica.cl/"  target="_blank" rel="noreferrer" >
                                <img src={logoHidraulica}className="h-48 w-auto mx-56 hover:scale-110 transition-all duration-150" alt="Logo Hidraulica"></img>
                            </a> 
                        </div>
                    </div>  
                    {/* <div className="flex my-10" >
                        <div className="flex-1 h-16 m-4 text-center">
                            <a href="https://instagram.com/jeannie_belleza.integral?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer" className="h-28 uppercase text-5xl font-extrabold  hover:text-primary-default transition-colors duration-500"> 
                                Laddys Miami
                            </a>
                        </div>
                        <div className="shrink-0 h-16 w-80 m-4 text-center">
                                <a href="https://instagram.com/griss_nail?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer" className="h-28 uppercase text-5xl font-extrabold hover:text-primary-default transition-colors duration-500"> 
                                    belleza integral
                                </a>
                        </div>
                        <div className="flex-1 h-16 m-4">
                            <a  href=""  className="px-10 rounded-lg h-28 uppercase text-center text-5xl font-extrabold"> 
                                Vera SpA
                            </a>
                        </div>
                    </div>  */}
                </div>
            </div>
        </div>

    )
}


export default OurClients;