export default function Heading({ title, extraClass='' }) {
  return (
    <div className={`font-bold mr-auto text-red-400 bg-gray-200 p-2 uppercase text-xl ${extraClass}`}>{title}</div>
  );
}
