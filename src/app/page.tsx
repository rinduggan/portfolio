import { Fragment } from 'react'
import Navbar from '../components/Navbar'
import { getDocumentBySlug } from 'outstatic/server'
import markdownToHtml from '../utils'
import Link from 'next/link'

export default async function Home() {
  //const introduction = await getIntroductionContent()
  
  return (
    <div className='flex justify-start mx-12 mt-12'>
      <div>
        <p>
          <h1>Main site is under construction</h1>
        </p>
        <br />
        <p>
          <Link href="https://www.dropbox.com/scl/fi/e6cso3oniwkei1jfyvxy6/IrinaHeimerleResume.pdf?rlkey=hjv6b6dusjd6xvntq6x4tum8x&dl=0">Check out <span className="underline decoration-pink-500 hover:decoration-pink-700">my resume</span></Link>
        </p>
      </div>
    </div>
  )
}

// const getIntroductionContent = async () => {
//   const post = getDocumentBySlug('sections', 'Introduction')
//   const content = await markdownToHtml(post.content)
  
//   return content
// }
