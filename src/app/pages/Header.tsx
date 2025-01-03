// import Image from 'next/image'

import { FC } from 'react'
// import Button from '@/components/Button'
import header from '../styles/header.module.css'
import Image from '../components/Image'
// import Image from 'next/image'
// const image_logo =
//   'https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/images/image-logo.png'
// const navLinks = [
//   { label: 'Home', href: '#home' },
//   { label: 'Features', href: '#features' },
//   { label: 'Integrations', href: '#integrations' },
//   { label: 'FAQs', href: '#faqs' }
// ]
const Header: FC = () => {
  return (
    <section className='container'>
      <div className='flex flex-row  w-full'>
        <div className={`my-4 mx-4`}>

          <Image
            src='https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/images/image-logo.png'
            alt='image-logo'
            width={321}
            height={55}
          />
        </div>
        {/* <div className='lg:flex justify-end items-center hidden'>
            <nav className='flex gap-6 font-medium'>
              {navLinks.map(link => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div> */}
        {/* <div className='flex justify-end gap-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feater feather-menu md:hidden'
            >
              <line x1='3' y1='12' x2='21' y2='12'></line>
              <line x1='3' y1='6' x2='21' y2='6'></line>
              <line x1='3' y1='18' x2='21' y2='18'></line>
            </svg>
            <Button variant='secondary' className='hidden md:inline-flex items-center'>
              Log In
            </Button>
            <Button variant='primary' className='hidden md:inline-flex items-center'>
              Sign Up
            </Button>
          </div> */}
      </div>
    </section>
  )
}
export default Header
