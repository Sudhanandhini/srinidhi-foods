import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { FaArrowRight, FaClock, FaUtensils } from 'react-icons/fa'
import { RECIPES } from '../data/recipes'

export default function Recipes() {
  return (
    <div>
      <PageBanner title="Recipes" />

      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RECIPES.map(r => (
              <div
                key={r.slug}
                className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-sm overflow-hidden"
              >
                {/* Image */}
                <div className="relative overflow-hidden group h-56">
                  <span className="absolute top-3 left-3 z-10 bg-[#77B81E] text-white text-xs font-bold px-3 py-1 rounded-sm">
                    {r.category}
                  </span>
                  <img
                    src={r.img}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Body */}
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-2">Posted on {r.date}</p>
                  <h4 className="font-heading font-bold text-[#002A33] text-lg mb-3">
                    {r.title}
                  </h4>

                  {/* Meta */}
                  <div className="flex items-center gap-5 mb-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <FaUtensils className="text-[#77B81E]" /> Serves {r.servings}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-[#77B81E]" /> {r.cookTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="text-[#77B81E]">★</span> {r.difficulty}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                    {r.description}
                  </p>

                  <Link
                    to={`/recipe/${r.slug}`}
                    className="inline-flex items-center gap-2 border border-[#77B81E] text-[#77B81E] hover:bg-[#77B81E] hover:text-white px-4 py-2 rounded-sm text-sm font-semibold transition-colors"
                  >
                    Read More <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
