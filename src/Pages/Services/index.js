import React from 'react';
import '../../assets/css/style.css';

import { DataCardServices } from '../../data/cardServices';

const Services = () => {
  return (
    <div id='ServicesSectionScroll' className='grid-cols-1 mx-10 xl:max-w-[1200px] xl:mx-auto  xl:flex  my-4'>
      <div className='py-10'>
        <h1 className='flex justify-center font-bold text-5xl'>Nuestros Servicios</h1>
        <p className='text-start text-lg my-2'>Podemos ayudarte</p>
      </div>
      <div className='grid grid-cols-2 w-full'>
        {DataCardServices?.length > 0 ? DataCardServices?.map((item) => {
          return(
            <div className='col-span-1' key={item.id}>
            <div className="card">
              <a className="card1" href="/">
                <p>{item.title}</p>
                <p className="small">{item.description}</p>
                <div className="go-corner" href="#">
                  <div className="go-arrow">
                    →
                  </div>
                </div>
              </a>
            </div>
          </div>
          )}
        ):null}

        {/* <div className='col-span-1'>
          <div className="card">
            <a className="card1" href="/">
              <p>Procesos operacionales</p>
              <p className="small">.Renta anual 14D8, pyme transparente, Renta presunta, soc de profesionales, etc</p>
              <div className="go-corner" href="#">
                <div className="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className='col-span-1'>
          <div className="card">
            <a className="card1" href="/">
              <p>Remuneraciones.</p>
              <p className="small"></p>
              <div className="go-corner" href="#">
                <div className="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className='col-span-1'>
          <div className="card">
            <a className="card1" href="/">
              <p>Servicios legales.</p>
              <p className="small">Abogados</p>
              <div className="go-corner" href="#">
                <div className="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>
        </div> */}
     
      </div>

    </div>
  )
}

export default Services
