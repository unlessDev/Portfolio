import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

{/* Convertir esta sección en un reloj */}
const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/"
        className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold'
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1 }}
        >DEV</MotionLink>
    </div>
  )
}

export default Logo