"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { Menu, MenuIcon, XIcon } from 'lucide-react'; // You can use the appropriate menu icon library
import { cn } from "@/lib/utils"
import { Category } from "@/types";
import { useState } from "react";
 

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false)

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const [menuOpen, setMenuOpen] = useState(false);
  const menuIcon = toggle ? <XIcon /> : <MenuIcon />; 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="mx-6 flex items-center space-x-4 lg:space-x-6"
    >
      <div className="flex justify-evenly">
        <div className="hidden md:flex gap-2 ">
          <ul className="flex">
            <li className="flex gap-5">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-black',
                    route.active ? 'text-black' : 'text-neutral-500'
                  )}
                >
                  {route.label}
              </Link>
              ))}
            </li>
          </ul>

        <Link
          href="/about"
          className="text-sm font-medium transition-colors hover:text-black"
        >
          About
        </Link>
        </div>
            
      
      </div>

      <div className='lg:hidden md:hidden flex justify-start'>
  <div>
    <div>
      <div
        onClick={() => setToggle(!toggle)}
        className="cursor-pointer"
      >
        {toggle ? <XIcon /> : <MenuIcon />}
      </div>
          
      <div className={`${!toggle ? 'hidden' : 'flex'} p-10 bg-black text-center absolute top-20 right-0 h-screen-full w-full z-10 rounded-xl flex items-center flex-col `}>
        <ul className="flex">
          <li className="flex flex-col gap-5">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  'text-2xl font-medium transition-colors hover:text-white md:hover:text-white',
                  route.active ? 'text-neutral-500' : 'text-neutral-200'
                )}
                onClick={() => setToggle(false)} // Close the menu when a route is clicked
              >
                {route.label}
              </Link>
            ))}
          </li>
        </ul>

        <Link
          href="/about"
          className="text-2xl font-medium transition-colors text-neutral-200 hover:text-white text-center mt-3"
          onClick={() => setToggle(false)} // Close the menu when "About" is clicked
        >
          About
        </Link>
      </div>
    </div>
  </div>
</div>

    </nav>
  )
};

export default MainNav;