import Button from '@/components/ui/Button'
import React from 'react'
import Strykejl from '../../../components/assets/images/logo-strykejernet-kunstskole.png'
import Enom from '../../../components/assets/images/ENLOGO.png'
  
import Indesign from './components/Indesign'
import { SiAdobeindesign } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import Image from 'next/image';
 
const About = () => {
  return (
    <div
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 text-center"
    >
      <h2 className="text-3xl text-center font-medium text-gray-900">
       About Me

      </h2>

      
      <div className="mt-6 space-y-4">
        <div className="flex items-center flex-col justify-between border-t border-gray-200 pt-4">
      

          <div className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-2xl first-letter:font-bold first-letter:text-gray-800 dark:first-letter:text-gray-100 ">

          On my creative journey, I capture the world through a vibrant lens. 
          </div>
          <p className='text-gray-500 dark:text-gray-400'>
          With a passion for silk-printing, textiles, and graphic design, I create art that is unique, using genuine images I capture myself. I&apos;ve shaped my path by exploring colors, textures, and forms, and my art reflects this diverse exploration.
            My images are born out of a desire to convey joy, inspiration, and a wealth of colors. </p>

          <div className="text-base font-medium text-gray-900 mx-2 py-3">
          If You have a Image you wish to have done, please contact via Email
          </div>
       

   
        <div className='w-4/12 h-full flex items-center justify-center flex-col sm:flex-row'>
        <Image src={Strykejl} alt="strykejernet-logo" 
        className='w-full'/>


        <Indesign />

        <Image src={Enom} alt="Estudio-nomada-logo" 
        className='w-full'/>
        </div>
        </div>


      </div>
  
    </div>
  )
}

export default About