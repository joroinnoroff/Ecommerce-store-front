"use client"
import useCart from '@/hooks/use-cart';
import { ShoppingBag, ShoppingBagIcon } from 'lucide-react';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from "./ui/Button"



const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return ( 
    <div className="mx-auto flex items-center justify-end right-3 absolute gap-x-4">
      <Button onClick={() => router.push('/cart')} className="flex items-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2">
        <ShoppingBag
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}
export default NavbarActions