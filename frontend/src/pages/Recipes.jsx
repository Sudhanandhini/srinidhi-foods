import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { FaEdit, FaArrowRight } from 'react-icons/fa'

const RECIPES = [
  {
    title: 'LEMON RICE',
    date: 'December 11, 2019',
    categories: ['Veg'],
    img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80',
    brand: 'Indusland',
  },
  {
    title: 'VEGETABLE FRIED RICE',
    date: 'December 11, 2019',
    categories: ['Basmati', 'Veg'],
    img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&q=80',
    brand: 'Indusland',
  },
  {
    title: 'TIRANGA PULAO',
    date: 'December 11, 2019',
    categories: ['Basmati', 'Veg'],
    img: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=500&q=80',
    brand: 'Indusland',
  },
  {
    title: 'VEGETABLE PULAO',
    date: 'December 10, 2019',
    categories: ['Basmati', 'Veg'],
    img: 'https://images.unsplash.com/photo-1596560548464-f010b73c2a5c?w=500&q=80',
    brand: 'Indusland',
  },
  {
    title: 'BIRYANI RICE',
    date: 'December 9, 2019',
    categories: ['Basmati', 'Non-Veg'],
    img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80',
    brand: 'Indusland',
  },
  {
    title: 'CURD RICE',
    date: 'December 8, 2019',
    categories: ['Veg'],
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80',
    brand: 'Indusland',
  },
]

export default function Recipes() {
  const [selected, setSelected] = useState(null)

  return (
    <div>
      <PageBanner title="Recipes" />

      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RECIPES.map((r, i) => (
              <div key={i} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-sm overflow-hidden">
                <div className="relative overflow-hidden group h-56">
                  <span className="absolute top-3 left-3 z-10 bg-[#77B81E] text-white p-2 rounded-sm">
                    <FaEdit className="text-sm" />
                  </span>
                  <img
                    src={r.img}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-2">
                    Posted on {r.date} / ☐ 0 /
                    <span className="text-[#77B81E] font-semibold ml-1">{r.brand}</span>
                  </p>
                  <h4 className="font-heading font-bold text-[#002A33] text-lg mb-2">{r.title}</h4>
                  <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
                    <span>🌾</span>
                    <span>{r.categories.join(', ')}</span>
                  </div>
                  <button
                    onClick={() => setSelected(r)}
                    className="flex items-center gap-2 border border-[#77B81E] text-[#77B81E] hover:bg-[#77B81E] hover:text-white px-4 py-2 rounded-sm text-sm font-semibold transition-colors"
                  >
                    Read More <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div className="bg-white rounded-sm max-w-lg w-full overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <img src={selected.img} alt={selected.title} className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="font-heading text-2xl font-bold text-[#002A33] mb-3">{selected.title}</h3>
              <p className="text-xs text-gray-400 mb-3">Posted on {selected.date}</p>
              <div className="flex gap-2 flex-wrap mb-4">
                {selected.categories.map(c => (
                  <span key={c} className="bg-[#77B81E]/10 text-[#77B81E] text-xs font-semibold px-3 py-1 rounded-full">{c}</span>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                A delicious {selected.title.toLowerCase()} recipe prepared with the finest quality Indusland Basmati Rice. Made with fresh ingredients and traditional spices, this dish brings out the authentic flavors of Indian cuisine.
              </p>
              <button
                onClick={() => setSelected(null)}
                className="mt-5 bg-[#002A33] text-white px-6 py-2 rounded-sm text-sm font-semibold hover:bg-[#77B81E] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
