import React, { useState } from 'react'
import { Link } from 'react-scroll';

const NavMobile = ({menuItem, close}) => {
  
  const [viewActive, setViewActive] = useState(false);
  const handleActive = (viewName) => setViewActive(viewName);
  const handleInActive = (viewName) => setViewActive(viewName);

  const ActiveClassTw = 'block rounded-md px-3 py-2 text-base font-medium bg-gray-900 text-white';
  const NoActiveClassTw = 'block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white';

  return (
    <>
      <Link 
        activeClass={ActiveClassTw}
        className={viewActive ? ActiveClassTw : NoActiveClassTw} 
        to={menuItem.href} 
        spy={true} 
        smooth={true} 
        offset={-110} 
        duration={500} 
        onSetActive={() => handleActive(true)} 
        onSetInactive={() => handleInActive(false)}
        onClick={() => close()}
      >
        {menuItem.name}
      </Link>
    </>
  )
}

export default NavMobile
