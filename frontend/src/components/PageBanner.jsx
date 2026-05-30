import { Link } from 'react-router-dom'

export default function PageBanner({ title, breadcrumb }) {
  return (
    <div
      className="relative h-36 flex items-center px-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0,42,51,0.7), rgba(0,42,51,0.5)), url('https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
        <h1 className="text-white text-3xl font-heading font-semibold">{title}</h1>
        <nav className="text-sm text-white">
          <Link to="/" className="hover:text-[#77B81E]">Home</Link>
          <span className="mx-2">|</span>
          <span className="text-[#77B81E]">{breadcrumb || title}</span>
        </nav>
      </div>
    </div>
  )
}
