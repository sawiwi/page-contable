import React from "react";
import logoHidraulica from '../../assets/img/logo-hidraulica.jpg';
import logoTrueCapital from '../../assets/img/logotruecapital.png'
import logoBidata from '../../assets/img/clients/logobidata.png'
import logoNexgen from '../../assets/img/clients/logoNexgen.webp'

const OurClients = () =>{
    return(
        <div id="OurCustomerScroll">
            <div  className=" xl:max-w-[1200px] xl:mx-auto">
                <div  className="mx-10 my-28">   
                    <div className='py-10'>
                        <h1 className='text-center font-bold text-5xl'>Nuestros clientes</h1>
                        <p className='text-center text-lg my-2'>¿Conoces alguno?</p>
                    </div> 
                    <div className="flex flex-wrap justify-center gap-y-10">
                        <ImageCard 
                            href={'https://accionpanal.cl/'} 
                            img={'https://accionpanal.com/_next/static/media/accion-panal-logo.21d16b96.webp'} 
                            alt="Logo Panal"
                        />
                        <ImageCard 
                            href={"https://aulenpropiedades.cl/"} 
                            img={"https://aulenpropiedades.cl/static/media/logoAulen.0aff8f045048e610b59f.png"} 
                            alt="Logo Aulen"
                        />
                        {/* <ImageCard 
                            href={"https://unne.cl/"} 
                            img={"https://unnepropiedades.cl/assets/img/global/logo.png"} 
                            alt="Logo Unne"
                        /> */}
                        {/* <ImageCard 
                            href={"https://www.truecapital.cl/"} 
                            img={logoTrueCapital} 
                            alt="Logo True Capital"
                        /> */}
                        <ImageCard 
                            href={"https://mhidraulica.cl/"} 
                            img={logoHidraulica}
                            alt="Logo Hidraulica"
                        />
                         <ImageCard 
                            href={"https://bidata.cl/"} 
                            img={logoBidata}
                            alt="Logo Bidata"
                            className="bg-gray-200/40 p-4 rounded-md"
                        />
                        <ImageCard 
                            href={"https://becauseyes.cl/"} 
                            img={logoNexgen}
                            alt="Logo Nexgen"
                            className="rounded-full"
                        />
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

const ImageCard = ({href,img,alt, className}) => {
    return (
    <div className={`${className} p-3 w-1/3 min-w-[300px] flex justify-center items-center hover:scale-110 transition-all duration-150`}>
            <a href={href} target="_blank" rel="noreferrer" >
                <img src={img} alt={alt} className="max-h-[192px] max-w-[256px] hover:scale-110 transition-all duration-150" ></img>
            </a>  
        </div>
    )
}


export default OurClients;