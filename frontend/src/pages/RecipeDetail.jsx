import { useParams, Link } from 'react-router-dom'
import { FaClock, FaUtensils, FaSmile } from 'react-icons/fa'
import PageBanner from '../components/PageBanner'
import { getRecipeBySlug } from '../data/recipes'

export default function RecipeDetail() {
  const { slug } = useParams()
  const recipe = getRecipeBySlug(slug)

  if (!recipe) {
    return (
      <div>
        <PageBanner title="Recipe Not Found" />
        <div className="py-20 text-center">
          <p className="text-gray-500 mb-4">The recipe you are looking for does not exist.</p>
          <Link to="/recipes" className="text-[#77B81E] font-semibold hover:underline">
            ← Back to Recipes
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <PageBanner
        title={recipe.title}
        breadcrumb={recipe.title}
        shopCrumb
        shopLabel={recipe.category}
        shopHref="/recipes"
      />

      {/* Top section: Image + Info */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          {/* Image */}
          <div className="w-full md:w-[42%] flex-shrink-0">
            <img
              src={recipe.img}
              alt={recipe.title}
              className="w-full rounded-sm shadow-sm object-cover"
              style={{ height: 'clamp(220px, 30vw, 380px)' }}
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              {recipe.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaUtensils className="text-[#002A33] text-xl flex-shrink-0" />
                <span className="text-sm font-bold text-[#002A33]">
                  Recipe Servings: {recipe.servings}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-[#002A33] text-xl flex-shrink-0" />
                <span className="text-sm font-bold text-[#002A33]">
                  Cook Time: {recipe.cookTime}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaSmile className="text-[#002A33] text-xl flex-shrink-0" />
                <span className="text-sm font-bold text-[#002A33]">
                  Difficulty Level: {recipe.difficulty}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients + Preparation */}
      <section className="pb-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          {/* Ingredients */}
          <div className="w-full md:w-[42%] flex-shrink-0">
            <h2 className="text-xl font-bold text-[#002A33] mb-4">Ingredients</h2>
            {recipe.ingredients.map((group, gi) => (
              <div key={gi} className="mb-4">
                {group.section && (
                  <p className="text-sm font-semibold text-gray-700 mb-2">{group.section}</p>
                )}
                <ul className="space-y-1.5">
                  {group.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-[#002A33] rounded-none flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Preparation */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-[#002A33] mb-4 border-b border-gray-200 pb-2">
              Preparation
            </h2>
            <ol className="space-y-3">
              {recipe.preparation.map((step, i) => (
                <li key={i} className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold text-[#002A33]">{i + 1}.</span> {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}
