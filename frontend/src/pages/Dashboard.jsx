import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBox, FaLeaf, FaSeedling, FaAward, FaSearch, FaPlus, FaEdit, FaTrash, FaTimes } from 'react-icons/fa'
import { useProducts } from '../context/ProductContext'

const CATEGORIES = ['Basmati Rice', 'Non-Basmati Rice', 'Millets']
const CAT_META = [
  { label: 'Basmati Rice', color: '#77B81E', icon: <FaLeaf /> },
  { label: 'Non-Basmati Rice', color: '#f97316', icon: <FaSeedling /> },
  { label: 'Millets', color: '#8b5cf6', icon: <FaAward /> },
]
const EMPTY_FORM = { name: '', weight: '', category: 'Basmati Rice', description: '', imageUrl: '', bg: '#f0f4ff' }

export default function Dashboard() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts()
  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [filterCat, setFilterCat] = useState('all')
  const [modalMode, setModalMode] = useState(null) // null | 'add' | 'edit'
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [editSlug, setEditSlug] = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [formError, setFormError] = useState('')

  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchCat = filterCat === 'all' || p.category === filterCat
    return matchSearch && matchCat
  })

  const stats = [
    { label: 'Total Products', count: products.length, icon: <FaBox />, color: '#002A33' },
    ...CAT_META.map(c => ({
      label: c.label,
      count: products.filter(p => p.category === c.label).length,
      icon: c.icon,
      color: c.color,
    })),
  ]

  function logout() {
    localStorage.removeItem('sf_auth')
    navigate('/login')
  }

  function openAdd() {
    setFormData(EMPTY_FORM)
    setFormError('')
    setModalMode('add')
  }

  function openEdit(p) {
    setFormData({
      name: p.name,
      weight: p.weight,
      category: p.category,
      description: p.description,
      imageUrl: '',
      bg: p.bg,
    })
    setEditSlug(p.slug)
    setFormError('')
    setModalMode('edit')
  }

  function closeModal() {
    setModalMode(null)
    setEditSlug(null)
    setFormError('')
  }

  function handleFormChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!formData.name.trim() || !formData.weight.trim()) {
      setFormError('Name and Weight are required.')
      return
    }
    if (modalMode === 'add') {
      addProduct(formData)
    } else {
      updateProduct(editSlug, formData)
    }
    closeModal()
  }

  function confirmDelete(slug) {
    setDeleteTarget(slug)
  }

  function handleDelete() {
    deleteProduct(deleteTarget)
    setDeleteTarget(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 font-body">
      {/* Top bar */}
      <div className="bg-[#002A33] text-white px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold tracking-wide">Srinidhi Foods — Product Dashboard</h1>
            <p className="text-xs text-gray-400 mt-0.5">Manage and view all products</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-[#77B81E] hover:underline text-sm font-semibold">
              ← Website
            </Link>
            <button
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded-sm transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-sm shadow-sm p-5 flex items-center gap-4 border border-gray-100">
              <div className="text-xl p-3 rounded-full flex-shrink-0" style={{ color: s.color, background: s.color + '18' }}>
                {s.icon}
              </div>
              <div>
                <p className="text-3xl font-bold text-[#002A33]">{s.count}</p>
                <p className="text-xs text-gray-500 font-medium mt-0.5 leading-tight">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 items-start sm:items-center">
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
          <div className="flex gap-2 flex-wrap items-center">
            <button
              onClick={() => setFilterCat('all')}
              className={`px-3 py-2 rounded-sm text-xs font-semibold border transition-colors ${filterCat === 'all' ? 'bg-[#002A33] text-white border-[#002A33]' : 'border-gray-200 text-gray-600 hover:border-[#002A33]'}`}
            >
              All ({products.length})
            </button>
            {CAT_META.map(c => (
              <button
                key={c.label}
                onClick={() => setFilterCat(c.label)}
                className="px-3 py-2 rounded-sm text-xs font-semibold border transition-colors"
                style={filterCat === c.label ? { background: c.color, color: 'white', borderColor: c.color } : { borderColor: '#e5e7eb', color: '#4b5563' }}
              >
                {c.label} ({products.filter(p => p.category === c.label).length})
              </button>
            ))}
            <button
              onClick={openAdd}
              className="flex items-center gap-2 bg-[#77B81E] hover:bg-[#5a8e14] text-white text-xs font-bold px-4 py-2.5 rounded-sm transition-colors ml-auto"
            >
              <FaPlus size={10} /> Add Product
            </button>
          </div>
        </div>

        {/* Delete confirmation */}
        {deleteTarget && (
          <div className="mb-4 bg-red-50 border border-red-200 rounded-sm px-5 py-4 flex items-center justify-between gap-4">
            <p className="text-sm text-red-700 font-medium">
              Are you sure you want to delete <strong>{products.find(p => p.slug === deleteTarget)?.name}</strong>?
            </p>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-sm transition-colors"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setDeleteTarget(null)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold px-4 py-2 rounded-sm transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide w-14">Img</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Product Name</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide w-20">Weight</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide hidden sm:table-cell">Category</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wide w-28">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-12 text-center text-gray-400 text-sm">
                    No products found.
                  </td>
                </tr>
              ) : (
                filtered.map((p, i) => (
                  <tr key={p.slug} className={`border-b border-gray-50 hover:bg-green-50/20 transition-colors ${i % 2 !== 0 ? 'bg-gray-50/40' : ''}`}>
                    <td className="px-4 py-2.5">
                      <div className="w-11 h-11 rounded-sm overflow-hidden flex items-center justify-center" style={{ background: p.bg }}>
                        <img src={p.images[0]} alt={p.name} className="w-full h-full object-contain" />
                      </div>
                    </td>
                    <td className="px-4 py-2.5 font-semibold text-[#002A33]">{p.name}</td>
                    <td className="px-4 py-2.5">
                      <span className="bg-[#77B81E] text-white text-xs font-bold px-2 py-0.5 rounded-sm">{p.weight}</span>
                    </td>
                    <td className="px-4 py-2.5 text-gray-500 text-xs hidden sm:table-cell">{p.category}</td>
                    <td className="px-4 py-2.5">
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          to={`/product/${p.slug}`}
                          className="text-gray-400 hover:text-[#77B81E] transition-colors"
                          title="View"
                        >
                          <FaBox size={13} />
                        </Link>
                        <button
                          onClick={() => openEdit(p)}
                          className="text-gray-400 hover:text-blue-500 transition-colors"
                          title="Edit"
                        >
                          <FaEdit size={13} />
                        </button>
                        <button
                          onClick={() => confirmDelete(p.slug)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                          title="Delete"
                        >
                          <FaTrash size={12} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3 text-right">
          Showing {filtered.length} of {products.length} products
        </p>
      </div>

      {/* Add / Edit Modal */}
      {modalMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-sm shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#002A33]">
              <h2 className="text-white font-bold text-base">
                {modalMode === 'add' ? 'Add New Product' : 'Edit Product'}
              </h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-white transition-colors">
                <FaTimes />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
              {formError && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-xs px-4 py-2.5 rounded-sm">
                  {formError}
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                    Product Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="e.g. Supreme Basmati Rice"
                    className="w-full border border-gray-200 px-3 py-2 text-sm rounded-sm outline-none focus:border-[#77B81E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                    Weight <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleFormChange}
                    placeholder="e.g. 1 Kg, 25 Kg, 500 g"
                    className="w-full border border-gray-200 px-3 py-2 text-sm rounded-sm outline-none focus:border-[#77B81E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleFormChange}
                    className="w-full border border-gray-200 px-3 py-2 text-sm rounded-sm outline-none focus:border-[#77B81E] bg-white"
                  >
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                    rows={3}
                    placeholder="Product description..."
                    className="w-full border border-gray-200 px-3 py-2 text-sm rounded-sm outline-none focus:border-[#77B81E] resize-none"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                    Image URL {modalMode === 'edit' && <span className="text-gray-400 font-normal normal-case">(leave blank to keep existing)</span>}
                  </label>
                  <input
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleFormChange}
                    placeholder="https://example.com/image.jpg"
                    className="w-full border border-gray-200 px-3 py-2 text-sm rounded-sm outline-none focus:border-[#77B81E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                    Card Background Color
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      name="bg"
                      value={formData.bg}
                      onChange={handleFormChange}
                      className="w-10 h-9 border border-gray-200 rounded-sm cursor-pointer p-0.5"
                    />
                    <input
                      type="text"
                      name="bg"
                      value={formData.bg}
                      onChange={handleFormChange}
                      placeholder="#f0f4ff"
                      className="flex-1 border border-gray-200 px-3 py-2 text-sm rounded-sm outline-none focus:border-[#77B81E]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#77B81E] hover:bg-[#5a8e14] text-white font-bold py-2.5 rounded-sm transition-colors text-sm"
                >
                  {modalMode === 'add' ? 'Add Product' : 'Save Changes'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 border border-gray-200 text-gray-600 hover:bg-gray-50 font-semibold py-2.5 rounded-sm transition-colors text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
