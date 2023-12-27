import Link from 'next/link'
import React from 'react'
import Logo from './logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, YoutubeIcon } from './icons'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className="" }) => {
  
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

    <span className={`h-[3px] inline-block
                    bg-dark absolute left-0 
                    -bottom-0.5 group-hover:w-full 
                    transition-[width] ease-out duration-300
                    ${router.asPath === href ? 'w-full' : 'w-0'}   
                    `
    }>&nbsp;</span>
    </Link>
  )
}

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <CustomLink href="/" title="Inicio" className='mr-4'/>
            <CustomLink href="/about" title="Sobre Mi" className='mx-4' />
            <CustomLink href="/projects" title="Proyectos" className='mx-4' />
            <CustomLink href="/blog" title="Blog" className='ml-4' />
        </nav>

        <nav className='flex items-center justify-center flex-wrap'>

          <motion.a href="https://www.linkedin.com/in/unlessdev/" target={"_blank"} 
            whileHover={{ y: -5 }}
            className='w-8 mx-3'
            whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
          </motion.a>

          <motion.a href="https://github.com/unlessDev" target={"_blank"}
            whileHover={{ y: -5 }}
            className='w-8 mx-3'
            whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
          </motion.a>

          {/* Convertir este SVG en el icono de Youtube */}
          <motion.a href="https://github.com/unlessDev" target={"_blank"}
            whileHover={{ y: -5 }}
            className='w-8 ml-3'
            whileTap={{ scale: 0.9 }}
            >
              <YoutubeIcon />
          </motion.a>

        </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>

    </header>
  )
}

export default NavBar