import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaLeaf, FaSeedling, FaAward, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ban1 from '../assets/images/ban1.jpg'
import ban2 from '../assets/images/ban2.jpg'
import ban3 from '../assets/images/ban3.jpg'
import { PRODUCTS } from '../data/products'





const SLIDES = [ban1, ban2, ban3]

export default function Home() {
  const [tab, setTab] = useState('basmati')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const tabProducts = tab === 'basmati' ? PRODUCTS.basmati : tab === 'nonBasmati' ? PRODUCTS.nonBasmati : PRODUCTS.millets

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative w-full overflow-hidden" style={{ height: 'clamp(220px, 55vw, 750px)' }}>
        {/* Slides */}
        {SLIDES.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === slide ? 1 : 0 }}
          >
            <img src={src} alt={`Banner ${i + 1}`} className="w-full h-full object-cover" />
            {/* <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,42,51,0.88) 0%, rgba(0,42,51,0.65) 60%, rgba(119,184,30,0.25) 100%)' }} /> */}
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          {/* <p className="text-[#77B81E] text-sm font-semibold tracking-widest uppercase mb-3">Step into the world of Basmati Rice</p>
          <h1 className="text-white font-heading text-4xl md:text-5xl font-bold leading-tight mb-6">
            Dine like the royals <span className="text-[#77B81E]">with our range of</span> Basmati Rice
          </h1>
          <p className="text-gray-300 text-sm md:text-base mb-8 leading-relaxed">
            Every grain of Traditional Basmati Rice is aged to perfection, giving your recipes a perfect blend of taste & aroma. Explore our complete range.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/products" className="bg-[#77B81E] hover:bg-[#5a8e14] text-white font-bold py-3 px-8 rounded-sm transition-colors">
              Our Products
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-[#002A33] font-bold py-3 px-8 rounded-sm transition-colors">
              Get Free Sample
            </Link>
          </div> */}
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={() => setSlide(s => (s - 1 + SLIDES.length) % SLIDES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-[#77B81E] text-white p-2 rounded-full transition-colors"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => setSlide(s => (s + 1) % SLIDES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-[#77B81E] text-white p-2 rounded-full transition-colors"
        >
          <FaChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === slide ? 'bg-[#77B81E]' : 'bg-white/50 hover:bg-white'}`}
            />
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 px-6 bg-white text-center">
        <p className="text-[#77B81E] text-md font-bold tracking-widest uppercase mb-4">Step into the world of Basmati Rice</p>
        <h2 className="font-heading text-5xl text-[#002A33] font-bold mb-6">
          Dine like the royals <span className="font-normal">with our range of Basmati Rice</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Indian Basmati is a long grain aromatic rice grown at the Himalayan foothills of the Indian sub-continent for centuries,
          blessed with characteristic extra-long slender grains that elongate at least twice the original size, giving a soft and fluffy
          texture upon cooking with delicious taste, superior aroma and distinct flavor.
        </p>
      </section>

      {/* Products Tabs */}
      <section className="py-10 px-6 bg-gray-50">
        <h3 className="text-center text-4xl font-heading font-bold text-[#002A33] mb-8">Our Products</h3>
        <div className="flex justify-center gap-2 mb-10">
          {[['basmati', 'Basmati Rice'], ['nonBasmati', 'Non-Basmati Rice'], ['millets', 'Millets']].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`tab-btn px-5 py-2 rounded-sm text-sm font-semibold border border-[#77B81E] transition-colors ${tab === key ? 'active' : 'text-[#77B81E] hover:bg-[#77B81E] hover:text-white'}`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {tabProducts.map((p) => (
            <Link key={p.slug} to={`/product/${p.slug}`} className="product-card bg-white rounded-sm shadow-sm overflow-hidden p-4 border border-gray-100 hover:shadow-md transition-shadow block">
              <div className="h-auto overflow-hidden flex items-center justify-center">
                <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover pt-4" />
              </div>
              <div className="p-6 text-center">
                <span className="text-sm font-bold text-white bg-[#77B81E] px-2 py-0.5 rounded-sm">{p.weight}</span>
                <p className="mt-4 text-md font-semibold text-[#002A33] uppercase tracking-wide leading-tight">{p.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Free Sample Form */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80" alt="Chef" className="rounded-lg shadow-xl" />
          </div>
          <div className="flex-1">
            <div className="bg-[#77B81E] text-white px-6 py-10 rounded-sm shadow-lg">
              <h3 className="font-heading text-2xl font-bold mb-1">Get Free Sample</h3>
              <p className="text-sm mb-6 opacity-90">Upto 5Kgs</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Name" className="border-b border-white bg-transparent outline-none py-2 text-white placeholder-white/70 text-sm col-span-1" />
                <input type="email" placeholder="Email" className="border-b border-white bg-transparent outline-none py-2 text-white placeholder-white/70 text-sm col-span-1" />
                <input type="tel" placeholder="Phone" className="border-b border-white bg-transparent outline-none py-2 text-white placeholder-white/70 text-sm col-span-1" />
                <input type="text" placeholder="Message" className="border-b border-white bg-transparent outline-none py-2 text-white placeholder-white/70 text-sm col-span-1" />
              </div>
              <button className="mt-4 bg-[#002A33] hover:bg-[#001a20] text-white font-bold py-2.5 px-8 rounded-sm text-sm transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'BASMATI RICE',
              img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80',
              desc: 'Indian Basmati is a long grain aromatic rice grown at the Himalayan foothills of the Indian sub-continent for centuries, blessed with characteristic extra-long slender grains.',
              icon: <FaLeaf className="text-3xl text-[#77B81E]" />,
            },
            {
              title: 'NON BASMATI RICE',
              img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&q=80',
              desc: 'Any Rice other than Basmati Rice is named as Non-Basmati Rice. India produces the maximum number of unique varieties of rice admired by food lovers for its taste, texture, flavor, and aroma.',
              icon: <FaSeedling className="text-3xl text-[#77B81E]" />,
            },
            {
              title: 'MILLETS',
              img: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=500&q=80',
              desc: 'The millets are considered to have been cultivated in India from pre-historic times. Their importance as an article of human food can be realised from the fact that about 36 million acres in India fall under cultivation of millets.',
              icon: <FaAward className="text-3xl text-[#77B81E]" />,
            },
          ].map((c, i) => (
            <div key={i} className="text-center">
              <img src={c.img} alt={c.title} className="w-full h-48 object-cover rounded-sm mb-5 shadow" />
              <div className="flex justify-center mb-3">{c.icon}</div>
              <h4 className="font-heading font-bold text-[#77B81E] mb-3">{c.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reach Us */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-xl mx-auto">
          <h3 className="font-heading text-2xl font-bold text-[#002A33] mb-2">Reach us</h3>
          <p className="text-xs text-gray-400 mb-6 uppercase tracking-widest">WANT TO KNOW MORE?</p>
          <div className="space-y-4">
            <select className="w-full border-b border-gray-300 py-2 text-sm text-gray-500 outline-none focus:border-[#77B81E] bg-transparent">
              <option>Location</option>
              <option>Bangalore</option>
            </select>
            <select className="w-full border-b border-gray-300 py-2 text-sm text-gray-500 outline-none focus:border-[#77B81E] bg-transparent">
              <option>Typer</option>
              <option>— Please choose an option —</option>
            </select>
            <input type="text" placeholder="Name (required)" className="w-full border-b border-gray-300 py-2 text-sm outline-none focus:border-[#77B81E]" />
            <input type="tel" placeholder="Phone (required)" className="w-full border-b border-gray-300 py-2 text-sm outline-none focus:border-[#77B81E]" />
            <textarea placeholder="Message" rows={3} className="w-full border-b border-gray-300 py-2 text-sm outline-none focus:border-[#77B81E] resize-none bg-transparent" />
            <button className="bg-[#77B81E] hover:bg-[#5a8e14] text-white font-bold py-2.5 px-8 rounded-sm text-sm transition-colors">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
