export default function Intro({ name, summary }) {
  return (
    <section>
      <h1>{name}</h1>
      <div>
        <p>{summary}</p>
      </div>
    </section>
  );
}
