import Counter from './posts/Counter'

export default function PostsLayout ({ children }) {
  return (
    <div>
      <h1>Posts Layout</h1>
      {/* the states persists in the layout, remember that layouts wraps the children */}
      {/* breadcrumbs */}
      <marquee className='small'>I'm a banner</marquee>
      <Counter />
      {children}
    </div>
  )
}

// creating a new drectory we can create a layout that groups al the routes that you dont want them to be nested but that they share the same layout.
