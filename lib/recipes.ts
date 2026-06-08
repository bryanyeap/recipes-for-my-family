export type Recipe = {
  slug: string
  title: string
  description: string
  emoji: string
  category: string
  prepTime: string
  cookTime: string
  servings: number
  ingredients: string[]
  steps: string[]
}

export const recipes: Recipe[] = [
  {
    slug: 'grandmas-chocolate-chip-cookies',
    title: "Grandma's Chocolate Chip Cookies",
    description:
      'Soft, chewy cookies with crisp edges — the recipe that started it all in our family kitchen.',
    emoji: '🍪',
    category: 'Dessert',
    prepTime: '15 min',
    cookTime: '12 min',
    servings: 24,
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 tsp baking soda',
      '1 tsp salt',
      '1 cup unsalted butter, softened',
      '3/4 cup granulated sugar',
      '3/4 cup packed brown sugar',
      '2 large eggs',
      '2 tsp vanilla extract',
      '2 cups chocolate chips',
    ],
    steps: [
      'Preheat oven to 375°F (190°C) and line baking sheets with parchment paper.',
      'Whisk together flour, baking soda, and salt in a bowl; set aside.',
      'Cream the butter with both sugars until light and fluffy, about 2 minutes.',
      'Beat in the eggs one at a time, then stir in the vanilla.',
      'Gradually mix in the dry ingredients until just combined, then fold in the chocolate chips.',
      'Drop rounded tablespoons of dough onto the baking sheets, spaced 2 inches apart.',
      'Bake for 9–11 minutes until golden at the edges. Cool on the sheet for 5 minutes before transferring to a wire rack.',
    ],
  },
  {
    slug: 'sunday-roast-chicken',
    title: 'Sunday Roast Chicken',
    description:
      'A golden, juicy roast chicken with crispy skin — the centerpiece of our Sunday family dinners.',
    emoji: '🍗',
    category: 'Dinner',
    prepTime: '20 min',
    cookTime: '1 hr 30 min',
    servings: 6,
    ingredients: [
      '1 whole chicken (about 4-5 lbs)',
      '3 tbsp olive oil',
      '1 lemon, halved',
      '1 head of garlic, halved crosswise',
      '1 small onion, quartered',
      'A few sprigs of fresh thyme and rosemary',
      '2 tsp salt',
      '1 tsp black pepper',
      '1 lb baby potatoes, halved',
      '3 carrots, cut into chunks',
    ],
    steps: [
      'Preheat oven to 425°F (220°C). Pat the chicken completely dry with paper towels.',
      'Rub the chicken all over with olive oil, then season generously inside and out with salt and pepper.',
      'Stuff the cavity with the lemon, garlic, onion, and herb sprigs.',
      'Arrange the potatoes and carrots around the chicken in a roasting pan, tossing them with a little oil, salt, and pepper.',
      'Roast for about 1 hour 20–30 minutes, until the juices run clear and a thermometer reads 165°F (74°C) in the thickest part of the thigh.',
      'Rest the chicken for 10–15 minutes before carving, then serve with the roasted vegetables.',
    ],
  },
  {
    slug: 'creamy-tomato-basil-pasta',
    title: 'Creamy Tomato Basil Pasta',
    description:
      'A quick weeknight favorite — a rich tomato sauce with cream and fresh basil tossed through pasta.',
    emoji: '🍝',
    category: 'Dinner',
    prepTime: '10 min',
    cookTime: '25 min',
    servings: 4,
    ingredients: [
      '1 lb (450g) pasta, such as penne or rigatoni',
      '2 tbsp olive oil',
      '1 small onion, finely chopped',
      '3 cloves garlic, minced',
      '1 (28 oz) can crushed tomatoes',
      '1/2 cup heavy cream',
      '1/2 tsp red pepper flakes (optional)',
      'Salt and pepper, to taste',
      '1/2 cup grated Parmesan cheese',
      'A handful of fresh basil leaves, torn',
    ],
    steps: [
      'Bring a large pot of salted water to a boil and cook the pasta until al dente. Reserve 1 cup of pasta water, then drain.',
      'While the pasta cooks, heat olive oil in a large skillet over medium heat. Add the onion and cook until softened, about 5 minutes.',
      'Stir in the garlic and red pepper flakes and cook for 1 minute until fragrant.',
      'Add the crushed tomatoes, season with salt and pepper, and simmer for 10–15 minutes, stirring occasionally.',
      'Stir in the heavy cream and simmer for another 2–3 minutes until the sauce is rich and slightly thickened.',
      'Toss the pasta into the sauce, adding a splash of the reserved pasta water if needed to loosen it.',
      'Remove from heat, stir in the Parmesan and most of the basil, and serve topped with the remaining basil.',
    ],
  },
  {
    slug: 'honey-almond-greek-yogurt',
    title: 'Honey Almond Greek Yogurt',
    description:
      'A quick, no-cook snack — creamy Greek yogurt topped with crunchy almonds and a drizzle of honey.',
    emoji: '🥣',
    category: 'Snack',
    prepTime: '5 min',
    cookTime: 'No cooking required',
    servings: 1,
    ingredients: [
      '1/2 cup plain non-fat Greek yogurt',
      '2 tbsp honey',
      '1/8 cup chopped almonds',
    ],
    steps: [
      'Put the yogurt in a bowl.',
      'Chop the almonds and mix them into the yogurt.',
      'Add the honey — stir it in, or drizzle it on top as a finishing touch.',
    ],
  },
]

export function getAllRecipes(): Recipe[] {
  return recipes
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.slug === slug)
}
