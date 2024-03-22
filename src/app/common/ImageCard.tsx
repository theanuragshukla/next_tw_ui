export const ImageCard = () => {
  return (
    <div className="max-w-lg px-4 md:max-w-xs lg:max-w-md rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-48"
        src="https://picsum.photos/500"
        alt="Card image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Heading</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque,{" "}
        </p>
      </div>
    </div>
  );
};
