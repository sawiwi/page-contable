import React from 'react'
import imageMision from '../../assets/img/mision.jpeg'
import imageVision from '../../assets/img/vision.jpeg'
import Style from '../../assets/css/about.module.css'

const About = () => {
  return (
    <section id='AboutSectionScroll'className='py-10'>
      <section className="p-8 max-w-[1200px] mx-auto">
        <div className=' mb-10 max-w-3xl mx-auto'>
          <h2 className='text-4xl font-bold sm:text-5xl text-center mb-2'>Nosotros</h2>
          <p className='text-center text-lg my-2'>Objetivos principales</p>
        </div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 items-stretch">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm hover:-translate-y-2 transition-all duration-300">
            <img src={imageMision} alt="" className="h-80 aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-100/70">
              <h3 className="text-3xl font-bold">Nuestra Misión</h3>
              <p className="my-6 text-gray-900">Nuestro propósito es asesorar, capacitar, informar, planificar, controlar y automatizar las labores Contable - tributarias, jurídicas y laborales de nuestros clientes para su crecimiento en el mercado.</p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-col-reverse hover:-translate-y-2 transition-all duration-300">
            <img src={imageVision} alt="" className="h-80 aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-100/70">
              <h3 className="text-3xl font-bold">Nuestra Visión</h3>
              <p className="my-6 text-gray-900">Fidelizar nuestra área abarcando el mercado, potenciando nuestros recursos, fortalezas y estrategias para así ser reconocidos por la calidad de nuestros servicios.</p>
            </div>
          </div>

        </div>
      </section>
      <section className={`${Style.bgImage} bg-bottom bg-cover bg-fixed bg-no-repeat h-[600px]  pt-16 relative after:content-[''] after:absolute after:w-full after:h-full after:bg-black/50 after:top-0 after:z-0`}>
        <div className="grid grid-cols-1 max-w-[1200px] mx-auto h-full xl:flex xl:justify-center relative z-10">
        <div className='w-full p-2 lg:w-[47.367%] flex justify-center items-center'>
            <div className='pt-11 pb-14 px-[50px] text-[#dddddd] bg-[#bfab528a] backdrop:blur-2xl rounded-lg'>
              <h1 className="text-3xl font-bold leadi sm:text-5xl">Sobre Nosotros</h1>
            </div>
          </div>
          <div className='w-full lg:w-[52.633%] xl:py-56 xl:px-10 xl:flex xl:justify-center'>
              {/* <div className='pt-11 pb-14 px-[50px] text-white bg-[#bfab528a] backdrop:blur-2xl rounded-lg'> */}
                <h1 className="text-xl p-3 font-bold xl:font-semibold leadi sm:text-2xl text-[#dddddd] text-center">CYVM se inicia en el área de Servicios Contables y Tributarios desde 2015, posicionandose como líder en el mercado por su relación precio-calidad</h1>
              {/* </div> */}
          </div>
        </div>
      </section>
    </section>
  )
}

export default About
