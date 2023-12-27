import React from 'react'
import Layout from './layout'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className='py-3 flex items-center'>
            <div className='flex items-center'>
                <span>{new Date().getFullYear()} &copy; unlessDev</span>
            </div>
        </Layout>
    </footer>
  )
}

export default Footer