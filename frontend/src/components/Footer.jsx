import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert(`Subscribed with: ${email}`)
    setEmail('')
  }

  return (
    <footer>
      {/* Main footer grid */}
      <div className="bg-white py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Our Location */}
          <div>
            <h4 className="section-underline text-[#002A33] font-bold text-lg mb-5 font-heading">Our Location</h4>
            <div className="w-full h-44 rounded overflow-hidden shadow border border-gray-200">
              <iframe
                title="Srinidhi Foods Location"
                src="https://maps.google.com/maps?q=Srinidhi+Foods+Yeshwanthpur+Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="section-underline text-[#002A33] font-bold text-lg mb-5 font-heading">Contact</h4>
            <div className="space-y-3 text-sm text-gray-700">
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[#77B81E] mt-1 shrink-0" />
                <span>#80/1-15, 1st Cross, Someshwarnagar,<br />Bangalore-560022,<br />Karnataka, India.</span>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-[#77B81E] shrink-0" />
                <a href="tel:+919845343999" className="hover:text-[#77B81E] transition-colors">Phone: +91 98453 43999</a>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-[#77B81E] shrink-0" />
                <a href="tel:+918023499450" className="hover:text-[#77B81E] transition-colors">Phone: +91-80-2349-9450</a>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-[#77B81E] shrink-0" />
                <a href="mailto:info@srinidhifoods.in" className="hover:text-[#77B81E] transition-colors">Email ID: info@srinidhifoods.in</a>
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="section-underline text-[#002A33] font-bold text-lg mb-5 font-heading">Follow Us</h4>
            <div className="flex flex-col gap-3 text-sm">
              {['Facebook', 'Twitter', 'Instagram', 'YouTube', 'LinkedIn'].map(s => (
                <a key={s} href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#77B81E] transition-colors font-medium">
                  <span className="w-2 h-2 bg-[#77B81E] rounded-full"></span>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="section-underline text-[#002A33] font-bold text-lg mb-5 font-heading">Subscribe</h4>
            <p className="text-sm text-gray-600 mb-4">Enter your email and we'll send you latest information and plans.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your Email Id"
                  required
                  className="w-full border-b-2 border-[#002A33] outline-none py-2 text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:border-[#77B81E] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-[#77B81E] hover:bg-[#5a8e14] text-white font-bold py-2.5 px-6 rounded text-sm transition-colors w-fit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#002A33] py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-sm">
            Copyright © 2019. All rights reserved | Design By Sunsys Technologies
          </p>
          <ul className="flex gap-6 text-sm">
            {[['/', 'Home'], ['/about', 'About'], ['/products', 'Products'], ['/recipes', 'Recipes'], ['/contact', 'Contact']].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-gray-400 hover:text-[#77B81E] transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
