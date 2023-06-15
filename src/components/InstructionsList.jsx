import Instruction from './Instruction';

export default function InstructionsList({ instructionsList }) {
  return (
    <>
      <h3 className='font-display my-3 text-xl font-bold'>Instructions</h3>
      <ol>
        {instructionsList.map((instruction, index) => (
          <Instruction key={index} step={Object.keys(instruction)[0]} instruction={Object.values(instruction)[0]} />
        ))}
      </ol>
    </>
  );
}
