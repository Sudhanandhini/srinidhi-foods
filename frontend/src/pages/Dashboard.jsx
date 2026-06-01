import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBox, FaLeaf, FaSeedling, FaAward, FaSearch } from 'react-icons/fa'
import { PRODUCTS, getAllProducts } from '../data/products'

const CATEGORY_META = [
  { key: 'basmati', label: 'Basmati Rice', color: '#77B81E', icon: <FaLeaf /> },
  { key: 'nonBasmati', label: 'Non-Basmati Rice', color: '#f97316', icon: <FaSeedling /> },
  { key: 'millets', label: 'Millets', color: '#8b5cf6', icon: <FaAward /> },
]

export default function Dashboard() {
  const allProducts = getAllProducts()
  const [search, setSearch] = useState('')
  const [filterCat, setFilterCat] = useState('all')

  const filtered = allProducts.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchCat = filterCat === 'all' || p.category === filterCat
    return matchSearch && matchCat
  })

  const stats = [
    { label: 'Total Products', count: allProducts.length, icon: <FaBox />, color: '#002A33' },
    ...CATEGORY_META.map(c => ({
      label: c.label,
      count: PRODUCTS[c.key].length,
      icon: c.icon,
      color: c.color,
    })),
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-body">
      {/* Top bar */}
      <div className="bg-[#002A33] text-white px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold tracking-wide">Srinidhi Foods — Product Dashboard</h1>
            <p className="text-xs text-gray-400 mt-0.5">Manage and view all products</p>
          </div>
          <Link to="/" className="text-[#77B81E] hover:underline text-sm font-semibold">
            ← Back to Website
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-sm shadow-sm p-5 flex items-center gap-4 border border-gray-100">
              <div
                className="text-xl p-3 rounded-full flex-shrink-0"
                style={{ color: s.color, background: s.color + '18' }}
              >
                {s.icon}
              </div>
              <div>
                <p className="text-3xl font-bold text-[#002A33]">{s.count}</p>
                <p className="text-xs text-gray-500 font-medium mt-0.5 leading-tight">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-sm text-sm outline-none focus:border-[#77B81E] bg-white"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilterCat('all')}
              className={`px-4 py-2 rounded-sm text-xs font-semibold border transition-colors ${
                filterCat === 'all' ? 'bg-[#002A33] text-white border-[#002A33]' : 'border-gray-200 text-gray-600 hover:border-[#002A33]'
              }`}
            >
              All ({allProducts.length})
            </button>
            {CATEGORY_META.map(c => (
              <button
                key={c.key}
                onClick={() => setFilterCat(c.label)}
                className="px-4 py-2 rounded-sm text-xs font-semibold border transition-colors"
                style={
                  filterCat === c.label
                    ? { background: c.color, color: 'white', borderColor: c.color }
                    : { borderColor: '#e5e7eb', color: '#4b5563' }
                }
              >
                {c.label} ({PRODUCTS[c.key].length})
              </button>
            ))}
          </div>
        </div>

        {/* Products table */}
        <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide w-16">Image</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Product Name</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Weight</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide hidden sm:table-cell">Category</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-gray-400 text-sm">
                    No products found.
                  </td>
                </tr>
              ) : (
                filtered.map((p, i) => (
                  <tr
                    key={p.slug}
                    className={`border-b border-gray-50 hover:bg-green-50/30 transition-colors ${i % 2 !== 0 ? 'bg-gray-50/40' : ''}`}
                  >
                    <td className="px-4 py-3">
                      <div
                        className="w-12 h-12 rounded-sm overflow-hidden flex items-center justify-center"
                        style={{ background: p.bg }}
                      >
                        <img src={p.images[0]} alt={p.name} className="w-full h-full object-contain" />
                      </div>
                    </td>
                    <td className="px-4 py-3 font-semibold text-[#002A33]">{p.name}</td>
                    <td className="px-4 py-3">
                      <span className="bg-[#77B81E] text-white text-xs font-bold px-2 py-0.5 rounded-sm">
                        {p.weight}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{p.category}</td>
                    <td className="px-4 py-3">
                      <Link
                        to={`/product/${p.slug}`}
                        className="text-[#77B81E] hover:underline text-xs font-semibold"
                      >
                        View →
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-right">
          Showing {filtered.length} of {allProducts.length} products
        </p>
      </div>
    </div>
  )
}
