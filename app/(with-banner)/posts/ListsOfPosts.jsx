import Link from 'next/link'
import LikeButton from './LikeButton'
import './listofposts.css'
const fetchPosts = () => {
  // now we fecth at component level
  // getStaticProps
  // return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
  // getServerSideProps
  // return fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'}).then(res => res.json())
  // incremental static regeneration
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
      // every 60 seconds do a fetch
    }
  })
    .then(res => res.json())
}

export async function ListOfPosts () {
  const posts = await fetchPosts()
  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ))
}
