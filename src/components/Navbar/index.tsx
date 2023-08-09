'use client'

import Image from "next/image";
import Link from "next/link";
import MenuIcon from '../../../public/menu.svg'
import XIcon from '../../../public/x.svg'
import { emblemaOne } from "@/app/fonts";
import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  return (
    <>
      <Disclosure as="nav" className="sm:hidden">
        {({ open }) => (
          <>
            {/* mobile menu */}
            <div className="flex justify-between items-center m-2.5">
              <span className={`${emblemaOne.className} text-2xl`}>RIN</span>
              <Disclosure.Button className="inline-flex items-center justify-center rounded-full p-2 bg-gold"> 
                {open ? (
                  <Image 
                    src={XIcon}
                    alt="Close Navigation Menu"
                  />
                ) : (
                  <Image 
                    src={MenuIcon}
                    alt="Open Navigation Menu"
                  />
                )}
              </Disclosure.Button>
            </div>
            {/* end of mobile menu */}

            {open && (
              <Disclosure.Panel>
                <div className="flex flex-col items-center h-screen w-screen">
                  <Link href="/about">ABOUT</Link>
                  <Link href="/blog">BLOG</Link>
                  <Link href="https://www.dropbox.com/scl/fi/6alcxfnd4a9v8prp5rgch/Irina-Heimerle.pdf?rlkey=vdrfpdmbhjso2fsi56vs04qvw&dl=0">RESUME</Link>
                </div>
              </Disclosure.Panel>
            )}
          </>
        )}
      </Disclosure>

      <div className="flex items-center justify-evenly rounded-full border border-gold m-3 p-2">
        <Link href="/" className={`${emblemaOne.className} text-xl`}>
          RIN
        </Link>
        <Link href="/about" className="hover:bg-gold hover:text-dark-green p-1 rounded-md">ABOUT</Link>
        <Link href="/blog" className="hover:bg-gold hover:text-dark-green p-1 rounded-md">BLOG</Link>
        <Link className="hover:bg-gold hover:text-dark-green p-1 rounded-md" href="https://www.dropbox.com/scl/fi/6alcxfnd4a9v8prp5rgch/Irina-Heimerle.pdf?rlkey=vdrfpdmbhjso2fsi56vs04qvw&dl=0">RESUME</Link>
      </div>
    </>
  )
}
