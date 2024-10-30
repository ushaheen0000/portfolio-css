"use client";
import Image from 'next/image';
import { TiThMenu } from "react-icons/ti";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Sheet,
    SheetPortal,
    SheetOverlay,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet"

const Header = () => {
    const [activePath, setActivePath] = useState('/'); // Default active path

    const handleClick = (path:string) => {
        setActivePath(path); // Update the active path when a link is clicked
    }
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <header>
             <div className='logo1'>
                <Image src="/logo1.png" alt="Logo" width={50} height={50} />
            </div>
            <div>
            <nav className='nav-1'>
            <ul>
                {['/', '/about', '/contact'].map((path) => (
                    <li key={path}>
                        <Link href={path}
                            
                                className={activePath === path ? 'active' : ''}
                                onClick={() => handleClick(path)} // Set active path on click
                            >
                                {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
                            
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
            </div>
           
          <Sheet open={isOpen} onOpenChange={setIsOpen} >
          
            <SheetTrigger className='btn'>
                <TiThMenu />
            </SheetTrigger>
        
            <SheetContent>
           
                <SheetHeader>
                    <SheetTitle className='img'><Image src="/logo1.png" alt="Logo" width={50} height={50} /></SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <nav>
                    <ul className='content'>
                        <li className='content'>
                            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        <li className='content'>
                            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                        </li>
                        <li className='content'>
                            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <SheetFooter>
                </SheetFooter>
            </SheetContent>
            
        </Sheet>
        
        </header>
    );
};

export default Header;

                   

