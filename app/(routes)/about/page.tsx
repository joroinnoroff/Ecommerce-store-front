import Button from '@/components/ui/Button'
import React from 'react'
 

import { HiMail } from "react-icons/hi";

const About = () => {
  return (
    <div
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 className="text-3xl font-medium text-gray-900">
        Kort Om Meg

      </h2>

      
      <div className="mt-6 space-y-4">
        <div className="flex items-center flex-col justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900 mx-2 py-3">         
          På min kreative reise, fanger jeg verden gjennom en fargesprakende linse. Med en lidenskap for silketrykk, tekstil og grafisk design, skaper jeg kunst som er unik ved hjelp av ekte bilder jeg selv tar. Jeg har formet min vei ved å utforske farger, teksturer og former, og min kunst bærer preg av denne mangfoldige utforskningen.
          </div>

          <div className="text-base font-medium text-gray-900 mx-2 py-3">
          Mine bilder blir laget ut av ønsket om å formidle glede, inspirasjon og fargerikdom. Gjennom min kunst ønsker jeg å berike omgivelsene med visuelle opplevelser som gir et pust av liv og energi. Hver komposisjon er en historie i seg selv, et uttrykk for min kreative utfoldelse og min lidenskap for å utforske nye horisonter.
          </div>

          <div className="text-base font-medium text-gray-900 mx-2 py-3">
          Om man har sett for seg ett spesielt bilde, kan hendvelser sendes på mail.
          </div>
       

          <div className="container">
           <div className="wrapper">
            <button className="btn">
            <div className="btn__bg">
              <span className="btn__bg__layer btn__bg__layer-first"></span>
              <span className="btn__bg__layer btn__bg__layer-second"></span>
              <span className="btn__bg__layer btn__bg__layer-third"></span>
             </div>

              <span className="btn__text-out"><a href="mailto:example@example.com" target="_blank">Ta kontakt Her</a></span>
              <span className="btn__text-in"><a href="mailto:example@example.com" target="_blank">Ta kontakt Her</a></span>
          </button>
        </div>
        </div>
        </div>
      </div>
  
    </div>
  )
}

export default About