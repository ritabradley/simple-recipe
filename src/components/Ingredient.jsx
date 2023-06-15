export default function Ingredient({ name, amount }) {
  return (
    <li className='flex items-center py-1 text-sm list-none'>
      <input className='w-4 h-4 mr-1 accent-[#fdcf72] focus:accent-[#fcbf49]' type='checkbox' />{' '}
      <strong className='pr-1 font-black'>{amount}</strong> <span dangerouslySetInnerHTML={{ __html: name }} />
    </li>
  );
}
