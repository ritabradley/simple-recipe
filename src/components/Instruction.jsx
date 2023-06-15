export default function Instruction({ step, instruction }) {
  return (
    <li className='flex justify-start my-3'>
      <span className='text-center bg-[#d62828] rounded text-white font-display font-bold text-2xl mr-3 w-9 h-9 flex items-center justify-center flex-shrink-0'>
        {step}
      </span>
      <p dangerouslySetInnerHTML={{ __html: instruction }} />
    </li>
  );
}
