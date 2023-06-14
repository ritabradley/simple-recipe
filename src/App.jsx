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
      <RecipeDetailList />
      <IngredientList />
      <InstructionsList />
    </>
  );
}
