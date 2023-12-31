import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForkKnife } from '@fortawesome/pro-duotone-svg-icons';

export default function RecipeDetail({ title, value, icon, styleClass }) {
  return (
    <div className={`py-2 mr-8 md:mr-0 flex ${styleClass}`}>
      <FontAwesomeIcon
        style={
          icon === faForkKnife
            ? { '--fa-primary-color': '#d62828', '--fa-secondary-color': '#fcbf49' }
            : { '--fa-primary-color': '#df5353', '--fa-secondary-color': '#fdcf72' }
        }
        icon={icon}
      />
      <div className='ml-1.5'>
        <h3 className='text-stone-400 text-xs font-bold uppercase'>{title}</h3>
        <p className='md:text-base text-sm'>{value}</p>
      </div>
    </div>
  );
}
