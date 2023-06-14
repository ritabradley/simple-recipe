import Intro from './components/Intro';
import RecipeImage from './components/RecipeImage';
import RecipeDetailList from './components/RecipeDetailList';
import IngredientList from './components/IngredientList';
import InstructionsList from './components/InstructionsList';

export default function App() {
  return (
    <>
      <h1>Classic Cheesecake Recipe</h1>
      <Intro />
      <RecipeImage />
      <RecipeDetailList />
      <IngredientList />
      <InstructionsList />
    </>
  );
}
