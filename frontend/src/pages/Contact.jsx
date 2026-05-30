import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div>
      <PageBanner title="Contact" />

      {/* Contact + Form */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* Left */}
          <div>
            <h2 className="font-heading text-3xl font-bold mb-6">
              <span className="text-[#77B81E]">Contact</span> Us
            </h2>
            <p className="font-bold text-[#002A33] mb-1">Srinidhi Foods</p>
            <div className="space-y-3 text-sm text-gray-700">
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[#77B81E] mt-1 shrink-0" />
                #80/1-15, 1st Cross, Someshwarnagar,<br />Bangalore-560022, Karnataka, India.
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-[#77B81E] shrink-0" />
                <a href="tel:+919845343999" className="text-[#77B81E] hover:underline">+91-98453-43999</a>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-[#77B81E] shrink-0" />
                <a href="tel:+918023499450" className="text-[#77B81E] hover:underline">+91-80-2349-9450</a>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-[#77B81E] shrink-0" />
                <a href="mailto:info@srinidhifoods.in" className="text-[#77B81E] hover:underline">info@srinidhifoods.in</a>
              </p>
            </div>
          </div>

          {/* Right - Enquiry Form */}
          <div>
            <h2 className="font-heading text-3xl font-bold mb-6">
              <span className="text-[#77B81E]">Enquiry</span> Form
            </h2>
            {sent && (
              <div className="bg-[#77B81E] text-white px-4 py-3 rounded-sm mb-5 text-sm font-semibold">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  className="border-b border-gray-300 py-2 text-sm outline-none focus:border-[#77B81E] transition-colors bg-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                  className="border-b border-gray-300 py-2 text-sm outline-none focus:border-[#77B81E] transition-colors bg-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="border-b border-gray-300 py-2 text-sm outline-none focus:border-[#77B81E] transition-colors bg-transparent"
                />
                <input
                  type="text"
                  placeholder="Message"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="border-b border-gray-300 py-2 text-sm outline-none focus:border-[#77B81E] transition-colors bg-transparent"
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-[#77B81E] hover:bg-[#5a8e14] text-white font-bold py-2.5 px-8 rounded-sm text-sm transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Quotes strip */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#002A33] py-8 px-10 flex items-center">
          <p className="text-white font-semibold text-lg italic">
            "Food is not just eating for energy, it is an experience."
          </p>
        </div>
        <div className="bg-[#77B81E] py-8 px-10 flex items-center">
          <p className="text-white font-semibold text-lg italic">
            "Food tastes better when you eat it with your family."
          </p>
        </div>
      </section>
    </div>
  )
}
