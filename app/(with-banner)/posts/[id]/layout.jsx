import Link from 'next/link'
const fetchSinglePost = (id) => {
  // now we fecth at component level
  // getStaticProps
  // return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
  // getServerSideProps
  // return fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'}).then(res => res.json())
  // incremental static regeneration
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
      // every 60 seconds do a fetch
    }
  })
    .then(res => res.json())
}
export default async function Post ({ children, params }) {
  const { id } = params
  const post = await fetchSinglePost(id)
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`${id}/comments`}>Comments</Link>
      {children}
    </article>
  )
}
