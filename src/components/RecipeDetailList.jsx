import RecipeDetail from './RecipeDetail';

export default function RecipeDetailList({ recipeDetails }) {
  return (
    <>
      <h3>Recipe Details</h3>
      {Object.entries(recipeDetails).map(([key, value]) => (
        <RecipeDetail title={key} value={value} key={key} />
      ))}
    </>
  );
}
