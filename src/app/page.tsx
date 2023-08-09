import Hexagon from '@/components/Hexagon'
import { emblemaOne } from './fonts'
import Image from 'next/image'
import Link from 'next/link'
import githubIcon from '../../public/github.svg'
import linkedinIcon from '../../public/linkedin.svg'
import emailIcon from '../../public/email.svg'

export default async function Home() {
  return (
    <div>
      <Hexagon side='left'/>
      <Hexagon side='right'/>
      <div className="grid place-items-center">
        <div className="fixed top-25">
          <div className={`${emblemaOne.className} bg-light-grey text-dark-green rounded-md p-14 text-3xl`}>
            <span>hi i'm rin</span>
          </div>
        </div>
        <div className="fixed top-2/3">
          <div className="grid grid-rows-2 text-xl">
            <span className="mb-4">
              full stack developer
            </span>
            <span>
              nova scotia, canada
            </span>
          </div>
        </div>
        <div className="fixed bottom-0 w-full mb-3">
          <div className="grid grid-cols-3 place-items-center">
            <div className="grid place-items-center w-11 h-11 bg-gold rounded-full">
              <Link href="https://github.com/rinduggan">
                <Image 
                  src={githubIcon}
                  alt="Link to Github profile"
                />
              </Link>
            </div>
            <div className="grid place-items-center w-11 h-11 bg-light-grey rounded-full">
              <Link href="https://www.linkedin.com/in/rin-duggan-201397152/">
                <Image 
                  src={linkedinIcon}
                  alt="Link to LinkedIn profile"
                />
              </Link>
            </div>
            <div className="grid place-items-center w-11 h-11 bg-gold rounded-full">
              <Link href="mailto:irinaheimerle@gmail.com">
                <Image 
                  src={emailIcon}
                  alt="Link to email"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
