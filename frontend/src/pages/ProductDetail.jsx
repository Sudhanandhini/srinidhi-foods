import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import PageBanner from '../components/PageBanner'
import { useProducts } from '../context/ProductContext'

export default function ProductDetail() {
  const { slug } = useParams()
  const { getBySlug } = useProducts()
  const product = getBySlug(slug)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) {
    return (
      <div>
        <PageBanner title="Product Not Found" />
        <div className="py-20 text-center">
          <p className="text-gray-500 mb-4">The product you are looking for does not exist.</p>
          <Link to="/products" className="text-[#77B81E] font-semibold hover:underline">
            ← Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const images = product.images.length > 1 ? product.images : [product.images[0], product.images[0]]

  return (
    <div>
      <PageBanner title={product.name} shopCrumb />

      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">

          {/* Left: Image viewer */}
          <div className="flex-1 min-w-0">
            {/* Main image */}
            <div
              className="relative rounded-sm overflow-hidden mb-4 flex items-center justify-center"
              style={{ height: 'clamp(280px, 38vw, 480px)', background: product.bg }}
            >
              <img
                src={images[activeImg]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImg(i => (i - 1 + images.length) % images.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-[#77B81E] text-white p-2 rounded-full transition-colors"
                  >
                    <FaChevronLeft size={12} />
                  </button>
                  <button
                    onClick={() => setActiveImg(i => (i + 1) % images.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-[#77B81E] text-white p-2 rounded-full transition-colors"
                  >
                    <FaChevronRight size={12} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {/* <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`overflow-hidden w-20 h-20 flex-shrink-0 border-2 transition-colors ${
                    activeImg === i ? 'border-[#77B81E]' : 'border-gray-200 hover:border-gray-400'
                  }`}
                  style={{ background: product.bg }}
                >
                  <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div> */}
          </div>

          {/* Right: Product info */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-[#002A33] uppercase tracking-wide mb-5">
              {product.name}
            </h1>

            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              {product.description}
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Category:{' '}
              <Link to="/products" className="text-[#77B81E] hover:underline font-medium">
                {product.category}
              </Link>
            </p>

            <div className="mb-8">
              <span className="inline-block bg-[#77B81E] text-white text-sm font-bold px-3 py-1 rounded-sm">
                {product.weight}
              </span>
            </div>

            {/* <div className="flex gap-4 flex-wrap">
              <Link
                to="/contact"
                className="bg-[#77B81E] hover:bg-[#5a8e14] text-white font-bold py-3 px-8 rounded-sm transition-colors text-sm"
              >
                Get Free Sample
              </Link>
              <Link
                to="/products"
                className="border-2 border-[#002A33] text-[#002A33] hover:bg-[#002A33] hover:text-white font-bold py-3 px-8 rounded-sm transition-colors text-sm"
              >
                View All Products
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}
