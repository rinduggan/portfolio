import { emblemaOne } from "@/app/fonts";
import { Disclosure } from "@headlessui/react";
import MenuIcon from '../../../public/menu.svg'
import XIcon from '../../../public/x.svg'
import Link from "next/link";
import Image from "next/image";

export default function Mobile() {
    return (
        <Disclosure as="nav" className="md:invisible">
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
    )
}