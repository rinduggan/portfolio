import { Fragment } from 'react'
import Navbar from '../components/Navbar'
import { getDocumentBySlug, markdownToHtml } from 'outstatic/server'

export default async function Home() {
  const introduction = await getIntroductionContent()
  
  console.log(introduction)

  return (
    <Fragment>
      <Navbar />
      <div>
        <h3>Hey, I'm Rin!</h3>
        <h1>I make stuff.</h1>
        <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est.</p>
      </div>
    </Fragment>
  )
}

const getIntroductionContent = async () => {
  const post = getDocumentBySlug('sections', 'Introduction') 

  const content = await markdownToHtml(post.content)

  return content
}
