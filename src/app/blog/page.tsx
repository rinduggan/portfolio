import { getDocuments } from "outstatic/server"

export default async function Blog() {
    const posts = await getData()

    return posts.map((post) => <h1>{post.title}</h1>)
}

const getData = async () => {
    const posts = getDocuments('sections', ['title'])
    return posts
}