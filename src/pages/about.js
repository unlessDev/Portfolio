import AnimatedText from '@/components/animatedText'
import Layout from '@/components/layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePhoto from '../../public/images/profile/fotoMía.jpg';
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/skills'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
    <Head>
        <title>unlessDev | Sobre mi</title>
        <meta name='descripcion' content='descripcion sobre mi' />
    </Head>

    <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text="Predisposicion sobre todo" className='mb-16' />
            <div className='grid w-full grid-cols-8 gap-16'>
                <div className='col-span-3 flex flex-col items-start justify-start'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Bibliografía</h2>
                    <p className='my-4 font-medium'>
                        text 1
                    </p>
                    <p className='my-4 font-medium'>
                        text 2
                    </p>
                    <p className='my-4 font-medium'>
                        text 3
                    </p>
                </div>

                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-black' />
                    {/* Cambiar la imagen por una comprimida y con mejor color */}
                    <Image src={profilePhoto} alt="unlessDev" className='w-full h-auto rounded-2xl'/>
                </div>

                <div className='col-span-2 flex flex-col items-end justify-between'>

                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumbers value={50} /> +   
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75'>Clientes</h2>    
                    </div>

                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumbers value={50} /> +
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75'>Proyectos</h2>    
                    </div>

                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumbers value={50} /> +
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75'>Experiencia</h2>    
                    </div>

                </div>

            </div>

            <Skills />
        </Layout>
    </main>
    </>
  )
}

export default about