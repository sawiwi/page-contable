import React from "react";

import logoHidraulica from '../../assets/img/logo-hidraulica.jpg';
import logoTrueCapital from '../../assets/img/logotruecapital.png'

const OurClients = () =>{
    return(
        <div id="OurCustomerScroll">
            <div  className=" xl:max-w-[1200px] xl:mx-auto ">
                <div  className="mx-10 my-28">   
                    <div className='py-10'>
                        <h1 className='text-center font-bold text-5xl'>Nuestros clientes</h1>
                        <p className='text-center text-lg my-2'>¿Conoces alguno?</p>
                    </div> 
                    <div className="grid grid-cols-1 xl:flex xl:my-10 xl:mt-1" >
                        <div className="grid py-10 mb-20 xl:flex-1 h-16 rounded-lg xl:h-28 hover:scale-110 transition-all duration-150 ">
                            <a href="https://accionpanal.cl/"  target="_blank" rel="noreferrer">
                                <img src="https://accionpanal.com/_next/static/media/accion-panal-logo.21d16b96.webp" className="xl:w-64 h-auto" alt="Logo Panal"></img>
                            </a>
                        </div>
                        <div className="grid py-10 mt-14 mb-20  xl:shrink-0 h-16 w-80 xl:m-4 xl:mt-10 hover:scale-110 transition-all duration-150">
                            <a href="https://aulenpropiedades.cl/"  target="_blank" rel="noreferrer">
                                <img src="https://aulenpropiedades.cl/static/media/logoAulen.0aff8f045048e610b59f.png" className="xl:w-64 h-auto" alt="Logo Aulen"></img>
                            </a>                      
                        </div>
                        <div className="grid py-10 mb-20 mt-6 xl:flex-1 h-16 m-4 hover:scale-110 transition-all duration-150">
                            <a href="https://unne.cl/"  target="_blank" rel="noreferrer">
                                <img src="https://unnepropiedades.cl/assets/img/global/logo.png" className="xl:w-64 h-auto" alt="Logo Unne"></img>
                            </a>   
                        </div>
                    </div> 
                    <div className="grid grid-cols-1 xl:flex xl:pl-36 xl:pr-36 xl:pb-36">
                        <div className="py-10 mb-20 xl:flex-1 h-16 m-4 hover:scale-110 transition-all duration-150">
                            <a href="https://www.truecapital.cl/"  target="_blank" rel="noreferrer">
                                <img src={logoTrueCapital} className="mt-10 xl:w-full xl:h-auto" alt="Logo True Capital"></img>
                            </a> 
                        </div>
                        {/* <div className="shrink-0 h-16 w-80 m-4">
                            <div className="bg-primary-default rounded-lg h-28"> 
                                    xdxdxdd 2
                                </div>
                        </div> */}
                        <div className="grid p-12 py-10 mt-10 mb-20 xl:flex-1 h-16 xl:m-4 ">
                            <a href="https://mhidraulica.cl/"  target="_blank" rel="noreferrer" >
                                <img src={logoHidraulica}className="h-48 w-auto xl:mx-56 hover:scale-110 transition-all duration-150" alt="Logo Hidraulica"></img>
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