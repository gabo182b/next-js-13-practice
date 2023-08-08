import Link from 'next/link'
import './header.css'

const navLinks = [{
  label: 'Home',
  route: '/'
},
{
  label: 'About',
  route: '/about'
},
{
  label: 'Posts',
  route: '/posts'
}]
export default function Header () {
  return (
    <header className='header'>
      <nav>
        <ul className='navigation'>
          {navLinks.map(({ label, route }) => {
            return (
              <li key={label}>
                <Link href={route}>
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
