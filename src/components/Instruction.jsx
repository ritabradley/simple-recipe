export default function Instruction({ step, instruction }) {
  return (
    <li>
      <span>{step}</span>
      <p dangerouslySetInnerHTML={{ __html: instruction }} />
    </li>
  );
}
