import Intro from './components/Intro';
import RecipeImage from './components/RecipeImage';
import RecipeDetailList from './components/RecipeDetailList';
import IngredientList from './components/IngredientList';
import InstructionsList from './components/InstructionsList';
import { recipeData } from '../data.js';

export default function App() {
  return (
    <>
      <Intro name={recipeData.name} summary={recipeData.blurb} />
      <RecipeImage imgURL={recipeData.mainImage} />
      <main className='md:grid md:grid-cols-2'>
        <section className='md:order-2'>
          <RecipeDetailList recipeDetails={recipeData.cookingDetails} />
        </section>
        <section className='md:order-1'>
          <IngredientList ingredientsList={recipeData.ingredientList} />
          <InstructionsList instructionsList={recipeData.instructions} />
        </section>
      </main>
    </>
  );
}
