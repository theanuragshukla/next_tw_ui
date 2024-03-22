export const ImageCard = () => {
  return (
    <div className="max-w-xs px-2 lg:max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full aspect-video"
        src="https://picsum.photos/1280/1080"
        alt="Card image"
      />
      <div className="px-2 py-2">
        <div className="font-bold text-xl mb-2">Card Heading</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla!
        </p>
      </div>
    </div>
  );
};
