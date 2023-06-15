import RecipeDetail from './RecipeDetail';
import { faClock, faForkKnife } from '@fortawesome/pro-duotone-svg-icons';

function camelCaseToNormalText(text) {
  return text
    .replace(/([A-Z])/g, ' $1') // insert a space before all capital letters
    .replace(/^./, (str) => str.toUpperCase()); // capitalize the first letter
}

export default function RecipeDetailList({ recipeDetails }) {
  const entries = Object.entries(recipeDetails);

  return (
    <div className='md:p-10 md:rounded-lg md:shadow-lg md:w-fit flex flex-col'>
      <div>
        <RecipeDetail
          styleClass={entries[0][0] === 'yields' ? 'text-[#d62828]' : 'text-stone-800'}
          icon={entries[0][0] === 'yields' ? faForkKnife : faClock}
          title={camelCaseToNormalText(entries[0][0])}
          value={entries[0][1]}
          key={entries[0][0]}
        />
      </div>
      <div className='md:flex-col flex'>
        {entries.slice(1).map(([key, value]) => (
          <RecipeDetail
            styleClass='text-stone-800'
            icon={faClock}
            title={camelCaseToNormalText(key)}
            value={value}
            key={key}
          />
        ))}
      </div>
    </div>
  );
}
