export default function RecipeImage({ imgURL }) {
  return (
    <img
      className='rounded-xl my-6 shadow-md'
      src={imgURL}
      alt='A slice of cheesecake with sliced strawberries on top. The slice is on a blue plate accompanied by a fork.'
    />
  );
}
