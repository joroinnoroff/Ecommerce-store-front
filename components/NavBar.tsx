import React from 'react'
import Container from '@/components/ui/container'
import Link from 'next/link'
import MainNav from './MainNav'
import getCategories from '@/actions/get-categories'
import NavBarActions from './NavBarActions'
import MobileNav from './MobileNav'




export const revalidate =0;


const NavBar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
   <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center sm:justify-between transition-all">
          <div className='flex'>
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
              <p className="font-bold text-xl">AURORA</p>
            </Link>
            <MainNav data={categories} />
            
            <NavBarActions />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NavBar