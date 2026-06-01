import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { PRODUCTS } from '../data/products'

const TABS = [
  { key: 'basmati', label: 'Basmati Rice' },
  { key: 'nonBasmati', label: 'Non-Basmati Rice' },
  { key: 'millets', label: 'Millets' },
]

export default function Products() {
  const [tab, setTab] = useState('basmati')
  const products = PRODUCTS[tab]

  return (
    <div>
      <PageBanner title="Products" />

      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-2 mb-10 flex-wrap">
            {TABS.map(t => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`tab-btn px-5 py-2 rounded-sm text-sm font-semibold border border-[#77B81E] transition-colors ${tab === t.key ? 'active' : 'text-[#77B81E] hover:bg-[#77B81E] hover:text-white'}`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {products.map(p => (
              <Link
                key={p.slug}
                to={`/product/${p.slug}`}
                className="product-card bg-white rounded-sm shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group block"
              >
                <div
                  className="h-52 overflow-hidden flex items-center justify-center relative"
                  style={{ background: p.bg }}
                >
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="bg-[#002A33] px-3 py-2.5 flex items-center gap-2">
                  <span className="text-white font-bold text-xs px-2 py-0.5 rounded-sm bg-[#77B81E]">
                    {p.weight}
                  </span>
                  <span className="text-white text-xs font-semibold uppercase tracking-wide leading-tight">
                    {p.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
