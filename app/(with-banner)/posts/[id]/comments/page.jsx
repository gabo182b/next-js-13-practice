import Image from 'next/image'
import './post.css'
const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  // throw new Error('Error Loading comments')
  // incremental static regeneration
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
      // every 60 seconds do a fetch
    }
  })
    .then(res => res.json())
}
export default async function Post ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)
  return (
    <ul className='comments-list'>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Image width='50' height='50' alt={comment.name} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} />
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
