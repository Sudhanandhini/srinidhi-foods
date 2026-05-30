import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/recipes', label: 'Recipes' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="w-full bg-[#ECEC95]">
      <div className="max-w-7xl mx-auto bg-[#ECEC95] px-6 py-4 flex justify-between items-center text-sm">
        <span className="text-[#002A33] font-semibold tracking-wide">Welcome to Srinidhi Foods</span>
        <div className="flex gap-4 text-[#002A33]">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#77B81E] transition-colors"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#77B81E] transition-colors"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#77B81E] transition-colors"><FaInstagram /></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#77B81E] transition-colors"><FaYoutube /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#77B81E] transition-colors"><FaLinkedin /></a>
        </div>
      </div>
      </div>

      {/* Main nav */}
      <div className="w-full bg-[#002A33] ">
      <nav className="max-w-7xl mx-auto bg-[#002A33] px-6 py-8 flex justify-between items-center shadow-lg">
        <Link to="/" className="text-white font-body text-3xl font-bold tracking-wide">
          Srinidhi Foods
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `nav-link text-white font-semibold text-md tracking-wide hover:text-[#77B81E] transition-colors ${isActive ? 'active text-[#77B81E]' : ''}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-white text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#002A33] border-t border-[#77B81E33] px-6 pb-4">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-white font-semibold hover:text-[#77B81E] transition-colors ${isActive ? 'text-[#77B81E]' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
      
    </header>
  )
}
