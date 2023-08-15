'use client'

import Link from "next/link";
import { emblemaOne } from "@/app/fonts";

export default function Navbar() {
  return (
    <>
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
