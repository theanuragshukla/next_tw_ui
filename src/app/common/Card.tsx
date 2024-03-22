import {
  HeartIcon,
  EyeIcon,
  ChatIcon,
  ShareIcon,
} from "@heroicons/react/outline";
export const Card = () => {
  const dummyParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec libero nec nulla ultricies ultricies. Donec auctor, quam a sollicitudin tincidunt, ligula justo ultricies purus, nec lacinia lacus nunc nec elit.`;
  const icons = [
    {
      name: "likes",
      icon: HeartIcon,
      label: "2k",
    },
    {
      name: "views",
      icon: EyeIcon,
      label: "2k",
    },
    {
      name: "comments",
      icon: ChatIcon,
      label: "2k Comments",
    },
    {
      name: "share",
      icon: ShareIcon,
      label: "Share",
    },
  ];
  return (
    <div className="flex p-4 border border-gray-200 rounded-lg shadow-lg ">
      <div className="flex-shrink-0 mr-4">
        <img
          src="https://i.pravatar.cc/100"
          alt="Avatar"
          className="w-12 h-12 rounded-full"
        ></img>
      </div>
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center ">
            <h2 className="font-bold mr-2 md:text-sm lg:text-md">John Doe</h2>
            <span className="bg-sky-800 text-white text-xs px-2 py-1 rounded-full">
              Sector 2
            </span>
          </div>
          <p className="text-sm text-gray-700 mb-4 text-sky-500 font-bold">
            2 min ago
          </p>
        </div>
        <p className="text-gray-800 mb-4">{dummyParagraph}</p>
        <div className="flex items-center text-gray-600 w-full justify-around">
          {icons.map((obj) => (
            <div key={obj.name} className="flex items-center gap-1">
              {<obj.icon className="h-5 w-5" />}
              <span className="font-bold hidden sm:inline md:hidden lg:inline ">
                {obj.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
