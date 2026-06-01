import lemon from '../assets/images/leamon-rice.jpg'
import pulao from '../assets/images/veb-pulao.jpg'
import tiranga from '../assets/images/tirango-pulao.jpg'
import fried from '../assets/images/fried-rice.jpg'


export const RECIPES = [
  {
    slug: 'lemon-rice',
    title: 'Lemon Rice',
    category: 'Veg',
    date: 'December 11, 2019',
    img: lemon,
    servings: 2,
    cookTime: '40 Min',
    difficulty: 'Easy',
    description:
      'A garden fresh vegetable biryani, bursting with spices and beautiful in its simplicity.',
    ingredients: [
      {
        section: null,
        items: [
          '1 tsp cumin seeds',
          '1/4 cup onions-grated',
          '1 tsp garlic-ginger paste',
          '2 cups mixed vegetables-finely chopped',
          '2 tsp coriander powder',
          '1/2 tsp garam masala',
          '1/2 tsp turmeric powder',
          '2 tsp salt or to taste',
          '1/2 tsp chilli powder or to taste',
          '1 tsp green chillies-chopped fine',
          '1 tsp lemon juice or to taste',
          '1 cup rice-boiled to almost done',
          '1/2 cup coriander leaves',
          '2 Tbsp oil',
        ],
      },
    ],
    preparation: [
      'Heat oil and add cumin seeds.',
      'Saute and add the onions, garlic-ginger paste. Saute till brown.',
      'Add vegetables, stir fry over low heat till half done.',
      'Add coriander powder, garam masala, haldi, salt, chilli powder and green chillies.',
      'Cook, covered for about 5 minutes and mix in the lemon juice and half the coriander.',
      'The water should be absorbed by now. Remove half the vegetables and layer with half the rice.',
      'Cover with the rest of the vegetable mixture and the rice again.',
      'Leave over low heat, covered for 10 minutes or so and serve garnished with the coriander.',
    ],
  },
  {
    slug: 'vegetable-pulao',
    title: 'Vegetable Pulao',
    category: 'Basmati',
    date: 'December 10, 2019',
    img: pulao,
    servings: 4,
    cookTime: '35 mins',
    difficulty: 'Easy',
    description:
      'Create comfort in a pot with this beautiful melange. A simple, speedy and satisfying rice meal made with the goodness of garden fresh veggies and Indusland Basmati rice.',
    ingredients: [
      {
        section: null,
        items: [
          '500 Ml Water',
          '500 Gram Basmati rice',
          '100 Gram Ghee',
          '50 Gram Paneer (cooked), chopped',
          '100 Gram Carrot',
          '100 Gram Beans',
          '100 Gram Peas',
          '2 Small Elaichi',
          '2 Cardamoms',
          '1 Cinnamon',
          '3 Bay leaves',
          '2 Tbsp Cumin seeds',
          '1/2 Tbsp Chilli powder',
          '1/4 Tbsp Turmeric',
          'To taste Salt',
          'Coriander leaves',
        ],
      },
    ],
    preparation: [
      'Heat the ghee and lightly saute all vegetables.',
      'Add paneer and saute.',
      'In a separate pan, saute all spices.',
      'Add drained rice and fry for 3 minutes.',
      'Add sauteed vegetables and water.',
      'Cover and cook until done.',
      'Garnish with coriander leaves.',
    ],
  },
  {
    slug: 'tiranga-pulao',
    title: 'Tiranga Pulao',
    category: 'Basmati',
    date: 'December 11, 2019',
    img: tiranga,
    servings: 2,
    cookTime: '55 Mins',
    difficulty: 'Easy',
    description:
      "Pulao being one of the most favorite dishes across India, is a must on a Sunday lunch menu. This Republic Day special recipe by Chef Jitender from Lord of the Drinks Barrel House is the perfect dish to cook at home and celebrate the day's spirit with your family.",
    ingredients: [
      {
        section: 'For orange rice:',
        items: [
          '1 Cup Basmati rice, blanched',
          '2 Tbsp Ghee',
          '1/4 tsp Cumin seeds',
          '1 tsp Ginger paste',
          '1/4 Cup Tomato puree',
          '1/2 tsp Turmeric powder',
          '1/2 tsp Red chilli powder',
          'Red chilli paste',
          'To taste Salt',
        ],
      },
      {
        section: 'For white rice:',
        items: ['1 Cup Basmati rice (cooked)'],
      },
      {
        section: 'For green rice:',
        items: [
          '2 Tbsp Ghee',
          '1/4 tsp Cumin seeds',
          '1 tsp Ginger paste',
          '1 tsp Green chilli paste',
          '1/2 Cup Spinach puree',
          'To taste Salt',
        ],
      },
    ],
    preparation: [
      'Heat 2 tbsps ghee in two different nonstick pans. Add cumin seeds to one pan and sauté till seeds begin to change the colour.',
      'Add rice and mix. Add cumin seeds to the second pan and sauté till they begin to change colour.',
      'Now add ginger paste, red chilli powder and red chili paste to the first pan and sauté.',
      'Add tomato puree to the pan along with salt and mix well. Post that add a cup of water and mix, cover and cook till the rice is done.',
      'Now add turmeric powder and rice to the second pan and mix well. Add green chili paste, ginger paste and salt and sauté lightly.',
      'Add ½ cup water and mix well. Cover and cook. When the water starts boiling, add spinach puree, mix well, cover and cook till the rice is done.',
      'Place a ring mould in the serving plate. Put the green rice in the mould and press lightly.',
      'Add cooked white rice and press lightly. Top it with the orange rice and press lightly.',
      'Remove the ring mould slowly and serve the Tiranga Pulao hot.',
    ],
  },
  {
    slug: 'vegetable-fried-rice',
    title: 'Vegetable Fried Rice',
    category: 'Basmati',
    date: 'December 11, 2019',
    img: fried,
    servings: 4,
    cookTime: '20 Mins',
    difficulty: 'Easy',
    description:
      'A great way to use some leftover rice! Easy, quick and delicious fried rice recipe that kids and adults would love alike. Nutritious veggies are sauteed with garlic, chilli and steamed rice along with oriental sauces. Flavourful rice in just 20 minutes with goodness of veggies.',
    ingredients: [
      {
        section: null,
        items: [
          '1 bowl Rice (a day old rice makes the best fried rice), boiled',
          '1 Tbsp Oil',
          '2-3 cloves Garlic, chopped',
          '1 Red chilli, chopped',
          '1 Tbsp Carrots, chopped',
          '3-4 Baby corn, chopped',
          '4-5 Tbsp Cabbage (diced)',
          '1/2 Tbsp Sesame oil',
          '4-5 Green beans, chopped',
          'To taste Salt',
          'Pepper',
          '1 tsp Soy sauce',
          '2-3 Tbsp Wine (optional)',
          'To garnish Spring onion greens',
        ],
      },
    ],
    preparation: [
      'In a pan add 1 Tbsp oil, garlic and chilli. Saute.',
      'Add carrots, baby corn, green beans and cabbage. Saute and add sesame oil. Add the rice.',
      'Season with salt and pepper, soy sauce and wine. Cook for a minute.',
      'Serve hot garnished with some chopped spring onion greens.',
    ],
  },
]

export function getRecipeBySlug(slug) {
  return RECIPES.find(r => r.slug === slug)
}
