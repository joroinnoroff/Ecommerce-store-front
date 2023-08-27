import Link from 'next/link';
import React from 'react'
import { FaInstagram } from 'react-icons/fa';  
import { SiAdobe } from 'react-icons/si'; 

const Footer = () => {
  return (
  <footer className='bg-white border-t'>
    <div className='mx-auto py-10'>


    <div className="container">
        <div className="wrapper">
          <button className="btn">
            <div className="btn__bg">
              <span className="btn__bg__layer btn__bg__layer-first"></span>
              <span className="btn__bg__layer btn__bg__layer-second"></span>
              <span className="btn__bg__layer btn__bg__layer-third"></span>
             </div>

    <span className="btn__text-out"><a href="mailto:example@example.com" target="_blank">Contact Us Here</a></span>
    <span className="btn__text-in"><a href="mailto:example@example.com" target="_blank">Contact Us Here</a></span>
  </button>
</div>
</div>
      <div className='flex items-center gap-3 justify-center mt-3'>
      <Link href="https://instagram.com/aysaau?igshid=MzRlODBiNWFlZA==" target="_blank">
        <FaInstagram size={40} color="#000" />  
      </Link>
      <SiAdobe size={40} color="#000" />  
      </div>
    <p className='text-center text-xs text-black'>
    &copy; 2023 Jorgen Oino - All rights Reserved.
    </p>
    </div>

    
  </footer>
  )
}

export default Footer