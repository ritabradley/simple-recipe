import Ingredient from './Ingredient';

export default function IngredientList({ ingredientsList }) {
  return (
    <section className='md:mt-0 mt-5'>
      <h3 className='font-display md:text-4xl my-3 text-xl font-bold'>Ingredients</h3>

      {ingredientsList.map((item, index) => (
        <div key={index}>
          {item.name && (
            <h4 className='font-display md:text-xl my-3 text-lg'>
              <em>{item.name}</em>
            </h4>
          )}
          {item.ingredients.map((ingredient, i) => (
            <Ingredient key={i} name={ingredient.name} amount={ingredient.amount} />
          ))}
        </div>
      ))}
    </section>
  );
}
