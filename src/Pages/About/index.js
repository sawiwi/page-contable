import React from 'react'

const About = () => {
  return (
    <section id='AboutSectionScroll'>
      <section className="p-8 max-w-[1200px] mx-auto">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 items-stretch">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm ">
            <img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-100/70">
              <h2 className="text-3xl font-bold">Nuestra Misión</h2>
              <p className="my-6">Nuestro propósito es asesorar, capacitar, informar, planificar, controlar y automatizar las labores Contable - tributarias, jurídicas y laborales de nuestros clientes para su crecimiento en el mercado.</p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-col-reverse">
            <img src="https://source.unsplash.com/640x480/?4" alt="" className="h-80 aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-100/70">
              <h2 className="text-3xl font-bold">Nuestra Visión</h2>
              <p className="my-6">Fidelizar nuestra área abarcando el mercado, potenciando nuestros recursos, fortalezas y estrategias para así ser reconocidos por la calidad de nuestros servicios.</p>
            </div>
          </div>

        </div>
      </section>
      <section className="bg-[url('https://talentocontable.cl/wp-content/uploads/2022/03/backtalento.jpg')] bg-cover bg-fixed bg-no-repeat h-[600px]  pt-16 relative after:content-['*'] after:absolute after:w-full after:h-full after:bg-black/50 after:top-0 after:z-0">
        <div className="max-w-[1200px] mx-auto h-full flex justify-center relative z-10">
          <div className='w-0 lg:w-[52.633%]'></div>
          <div className='w-full lg:w-[47.367%] flex justify-center items-center'>
            <div className='pt-11 pb-14 px-[50px] text-white bg-[#5f52bfa9] backdrop:blur-2xl rounded-lg'>
              <h1 className="text-4xl font-bold leadi sm:text-5xl">Sobre Nosotros</h1>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default About
