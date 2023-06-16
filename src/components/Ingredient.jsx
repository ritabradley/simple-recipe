export default function Ingredient({ name, amount }) {
  return (
    <li className='md:text-base flex items-center py-1 text-sm list-none'>
      <input
        className='w-4 h-4 mr-1 accent-[#fdcf72] focus:accent-[#fcbf49] appearance-none rounded relative cursor-pointer'
        type='checkbox'
      />
      <strong className='pr-1 font-black'>{amount}</strong>
      <span dangerouslySetInnerHTML={{ __html: name }} />
      <style jsx>{`
        input[type='checkbox']::before {
          content: ' ';
          width: 16px;
          height: 16px;
          border-radius: 50%;
          position: absolute;
          top: -2px;
          left: -2px;
          background: #fff;
          transition: all 0.3s ease;
          border: 2px solid #fdcf72;
        }
        input[type='checkbox']:checked::before {
          transform: scale(0.6);
          opacity: 0.6;
          background: #fdcf72;
        }
      `}</style>
    </li>
  );
}
