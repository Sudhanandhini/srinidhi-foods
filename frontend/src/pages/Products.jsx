import { useState } from 'react'
import PageBanner from '../components/PageBanner'

const PRODUCTS = {
  'Basmati Rice': [
    { name: 'Indusland Supreme Basmati Rice', weight: '1kg', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80', bg: '#f0f4ff' },
    { name: 'Indusland Essential Basmati Rice', weight: '1kg', img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&q=80', bg: '#e8f5e9' },
    { name: 'Indusland Dubar Basmati Rice', weight: '1kg', img: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=300&q=80', bg: '#e8f0fe' },
    { name: 'Indusland Supreme Basmati Rice', weight: '25kg', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80', bg: '#fff3e0' },
    { name: 'Indusland Essential Basmati Rice', weight: '25kg', img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&q=80', bg: '#e8f5e9' },
    { name: 'Indusland Dubar Basmati Rice', weight: '25kg', img: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=300&q=80', bg: '#e8f0fe' },
    { name: 'Kitchen Chef Dubar Basmati Rice', weight: '25kg', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80', bg: '#e3f2fd' },
    { name: 'Kitchen Chef Select Basmati Rice', weight: '25kg', img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&q=80', bg: '#fff9c4' },
    { name: 'Kitchen Chef Royal Basmati Rice', weight: '25kg', img: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=300&q=80', bg: '#fce4ec' },
    { name: 'Naksha Deluxe Basmati Rice', weight: '25kg', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80', bg: '#e8f5e9' },
    { name: 'Golden Dynasty Premium Basmati Rice', weight: '25kg', img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&q=80', bg: '#fff3e0' },
  ],
  'Non-Basmati Rice': [
    { name: 'Sona Masoori Rice', weight: '25kg', img: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=300&q=80', bg: '#e8f5e9' },
    { name: 'Thanjavur Ponni Rice', weight: '25kg', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80', bg: '#fff3e0' },
    { name: 'Idly Rice', weight: '25kg', img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&q=80', bg: '#e3f2fd' },
    { name: 'Matta Rice', weight: '25kg', img: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=300&q=80', bg: '#fce4ec' },
    { name: 'Kolam Rice', weight: '25kg', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80', bg: '#f3e5f5' },
    { name: 'Raw Rice', weight: '25kg', img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&q=80', bg: '#e8f5e9' },
  ],
  'Millet': [
    { name: 'Pearl Millet (Bajra)', weight: '1kg', img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&q=80', bg: '#f3e5f5' },
    { name: 'Finger Millet (Ragi)', weight: '1kg', img: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=300&q=80', bg: '#e8f5e9' },
    { name: 'Foxtail Millet', weight: '1kg', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80', bg: '#fff9c4' },
    { name: 'Sorghum (Jowar)', weight: '1kg', img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&q=80', bg: '#fce4ec' },
    { name: 'Little Millet', weight: '1kg', img: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=300&q=80', bg: '#e3f2fd' },
  ],
}

const weightColors = {
  '1kg': '#77B81E',
  '25kg': '#f97316',
}

export default function Products() {
  const [tab, setTab] = useState('Basmati Rice')
  const products = PRODUCTS[tab]

  return (
    <div>
      <PageBanner title="Products" />

      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-2 mb-10 flex-wrap">
            {Object.keys(PRODUCTS).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`tab-btn px-5 py-2 rounded-sm text-sm font-semibold border border-[#77B81E] transition-colors ${tab === t ? 'active' : 'text-[#77B81E] hover:bg-[#77B81E] hover:text-white'}`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div key={i} className="product-card bg-white rounded-sm shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group">
                <div className="h-52 overflow-hidden flex items-center justify-center relative" style={{ background: p.bg }}>
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="bg-[#002A33] px-3 py-2.5 flex items-center gap-2">
                  <span
                    className="text-white font-bold text-xs px-2 py-0.5 rounded-sm"
                    style={{ background: weightColors[p.weight] || '#77B81E' }}
                  >
                    {p.weight}
                  </span>
                  <span className="text-white text-xs font-semibold uppercase tracking-wide leading-tight">{p.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
