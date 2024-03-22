export default function Heading({
  title,
  extraClass = "",
}: {
  title: string;
  extraClass?: string;
}) {
  return (
    <div
      className={`font-bold mr-auto text-red-400 bg-gray-200 p-2 uppercase text-xl ${extraClass}`}
    >
      {title}
    </div>
  );
}
