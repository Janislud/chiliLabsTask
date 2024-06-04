"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import menuIcon from '../app/media/menu.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav className="border-b border-gray-300">
                <div className="container mx-auto flex items-center justify-between py-4">
                    <Link href="/" className="flex items-center">
                        <span className="text-black text-2xl font-bold ml-2">PhoneShop</span>
                    </Link>
                    <button className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <Image src={menuIcon} alt="Menu" width={30} height={30} />
                    </button>
                    <ul className="hidden lg:flex flex-row space-x-9">
                        <li>
                            <Link href="/phone" className="text-black hover:underline">Phone</Link>
                        </li>
                        <li>
                            <Link href="/phonecase" className="text-black hover:underline">PhoneCase</Link>
                        </li>
                        <li>
                            <Link href="/accessories" className="text-black hover:underline">Accessories</Link>
                        </li>
                        <li>
                            <Link href="/watches" className="text-black hover:underline">Watches</Link>
                        </li>
                    </ul>
                </div>
                <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="navigation-wrapper flex flex-col space-y-4 mb-4 text-right">
                        <li>
                            <Link href="/phone" className="text-black hover:underline">Phone</Link>
                        </li>
                        <li>
                            <Link href="/phonecase" className="text-black hover:underline">PhoneCase</Link>
                        </li>
                        <li>
                            <Link href="/accessories" className="text-black hover:underline">Accessories</Link>
                        </li>
                        <li>
                            <Link href="/watches" className="text-black hover:underline">Watches</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
