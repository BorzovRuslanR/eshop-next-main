import AppBarAuth from '@/features/user/AppBarAuth'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


export default function AppBar() {
  return (
    <header className='flex gap-4 justify-between items-center h-16 px-4 py-2 shadow-md
     shadow-slate-600 dark:shadow-slate-100'>
        <div>
          <Link href={'/'}>
            <Image 
              src={'/logo2.png'}
              alt="Logo" width={100}
              height={100}
              style={{ color: 'inherit' }}
            />
          </Link>
        </div>
        <nav className="flex justify-items-start items-center gap-4">
          <div className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32 flex items-center justify-center'>
            <Link href="/" className="">Main page</Link>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32 flex items-center justify-center">
            <Link href={'/catalog'}>Catalog</Link>
          </div>
        </nav>
        <AppBarAuth />
    </header>
  )
}
