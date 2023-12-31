import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripDots } from '@fortawesome/pro-duotone-svg-icons';

export default function Intro({ name, summary }) {
  return (
    <section>
      <h1 className='font-display md:text-5xl text-2xl font-bold'>{name}</h1>
      <div className='font-body flex py-3'>
        <FontAwesomeIcon
          icon={faGripDots}
          size='lg'
          style={{ '--fa-primary-color': '#d62828', '--fa-secondary-color': '#fcbf49' }}
        />
        <em>
          <p className='md:w-2/3 md:text-base px-4 text-sm'>{summary}</p>
        </em>
      </div>
    </section>
  );
}
