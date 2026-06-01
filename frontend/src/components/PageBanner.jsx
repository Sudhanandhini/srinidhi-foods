import { Link } from 'react-router-dom'
import bannerBg from '../assets/images/breadcrumb-bg2-1.jpg'

export default function PageBanner({ title, breadcrumb, shopCrumb, shopLabel, shopHref }) {
  return (
    <div
      className="relative h-36 flex items-center px-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0,42,51,0.6), rgba(0,42,51,0.4)), url(${bannerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
        <h1 className="text-white text-3xl font-heading font-semibold">{title}</h1>
        <nav className="text-sm text-white">
          <Link to="/" className="hover:text-[#77B81E]">Home</Link>
          {shopCrumb && (
            <>
              <span className="mx-2">|</span>
              <Link to={shopHref || '/products'} className="hover:text-[#77B81E]">
                {shopLabel || 'Shop'}
              </Link>
            </>
          )}
          <span className="mx-2">|</span>
          <span className="text-[#77B81E]">{breadcrumb || title}</span>
        </nav>
      </div>
    </div>
  )
}
