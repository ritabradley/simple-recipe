import Ingredient from './Ingredient';

export default function IngredientList({ ingredientsList }) {
  return (
    <>
      <h3>Ingredients</h3>

      {ingredientsList.map((item, index) => (
        <div key={index}>
          {item.name && <h4>{item.name}</h4>}
          {item.ingredients.map((ingredient, i) => (
            <Ingredient key={i} name={ingredient.name} amount={ingredient.amount} />
          ))}
        </div>
      ))}
    </>
  );
}
