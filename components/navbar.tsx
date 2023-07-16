import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { MainNav } from '@/components/main-nav'

type Props = {}

function Navbar({ }: Props) {
  return (
    <div className='border-b'>
      <div className='flex h-16 items-center px-4'>
        <div>
          This will be a store switcher
        </div>
        <div>
          This will be the routes
        </div>
        <div className='ml-auto flex items-center space-x-4'>
          <MainNav />
          <UserButton afterSignOutUrl='/'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar