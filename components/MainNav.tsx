"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { Menu } from 'lucide-react'; // You can use the appropriate menu icon library
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

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="mx-6 flex items-center space-x-4 lg:space-x-6 "
    >
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
    
    <Link
        href="/about"
        className="text-sm font-medium transition-colors hover:text-black"
      >
        About
      </Link>



    </nav>
  )
};

export default MainNav;