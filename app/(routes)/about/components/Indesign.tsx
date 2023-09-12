"use client"
import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../../../../components/assets/animations/adobeani.json';
const Indesign = () => {
  return (
    <div>
    <Lottie animationData={animationData} style={{ height: '300px', width: '300px' }} />
    </div>
  )
}

export default Indesign
