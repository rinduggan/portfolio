import Image from "next/image";
import Link from "next/link";
import Avatar from '../../../public/avatar.jpg'
import '@/app/globals.css'

export default function Navbar() {
  return (
    <nav>
      <div className="navbar flex gap-x-10 items-center">
        <div>
          <Image 
            src={Avatar}
            width={12}
            height={12}
            alt="Avatar Picture"
          />
        </div>
        <span>
          <Link href="/">About Me</Link>
        </span>
        <span>
          <Link href="/">Blog</Link>
        </span>
        <span>
          <Link href="https://www.dropbox.com/scl/fi/e6cso3oniwkei1jfyvxy6/IrinaHeimerleResume.pdf?rlkey=hjv6b6dusjd6xvntq6x4tum8x&dl=0">Resume</Link>
        </span>
      </div>
    </nav>
  )
}
