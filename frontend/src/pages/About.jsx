import PageBanner from '../components/PageBanner'

export default function About() {
  return (
    <div>
      <PageBanner title="About" />

      {/* Story Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Movement Towards Better Health</p>
          <h2 className="text-center font-heading text-3xl font-bold text-[#77B81E] mb-12">A Little Story About Us</h2>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"
                alt="Rice fields"
                className="w-full rounded-sm shadow-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-5 text-gray-700 text-sm leading-relaxed">
              <p>
                Srinidhi Foods is an India-based manufacturer & exporter of South Indian rice varieties like Sona Masoori, Thanjavur Ponni, Idly Rice, Matta Rice, mainly Pusa 1121 Basmati Rice. We have over 50 years of expertise in the Rice business. Our business has been supported by state-of-the-art processing & packing facilities.
              </p>
              <p>
                This is a result of a very humble beginning made by the vision holders in the ancestry who believed that quality is the strength and only quality should be the priority. And productivity is always the result of a commitment to excellence, intelligent planning, and focused effort.
              </p>
              <p>
                This foresight has enabled us to delight our customers with the best of the best products. We at Srinidhi Foods, continuously strive to enhance our performance and go beyond the defined parameters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center">
            <h3 className="font-heading text-2xl font-bold text-[#77B81E] mb-6">Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To be the country's one of the leading rice manufacturing & trading company, serving the society in different ways to suit and fulfill the requirements of the modern-day consumer and be recognized as a trusted and quality supplier of a wide range of rice and other food grains.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-heading text-2xl font-bold text-[#77B81E] mb-6">Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To offer unmatched quality & purity and be the best in everything we do. Develop innovative products and processes in an effort to enhance the consumer experience. Create nutritious yet tasty products that can improve and enhance the quality of life that can inspire a healthy lifestyle. Empower our talented people to take the initiative and explore new opportunities and possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-6 bg-[#002A33]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: '50+', label: 'Years Experience' },
            { val: '100+', label: 'Products' },
            { val: '500+', label: 'Happy Clients' },
            { val: '10+', label: 'States Served' },
          ].map((s, i) => (
            <div key={i}>
              <p className="text-[#77B81E] font-heading text-4xl font-bold">{s.val}</p>
              <p className="text-white text-sm mt-2 font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
