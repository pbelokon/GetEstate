'use client'
import Link from 'next/link';
import React from 'react'
import { FaSearch } from "react-icons/fa";


export default function Header() {
  return (
    <header className='bg-sky-50 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link href='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-green-500'>Get</span>
            <span className='text-green-700'>Estate</span>
          </h1>
        </Link>
        <form action="" className='bg-sky-100 p-3 rounded-lg flex items-center'>
          <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
          <button><FaSearch /></button>
        </form>


        <ul className='flex gap-4'>
          <Link href='/'>
            <li className='hidden md:inline  text-slate-950 hover:underline'>
              Home
            </li>
          </Link>
          <Link href='about'>
            <li className='hidden md:inline  text-slate-950 hover:underline'>
              About
            </li>
          </Link>
          <Link href='sign-in'>
            <li className='hidden md:inline  text-slate-950 hover:underline'>
              Sign-in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  )
}
