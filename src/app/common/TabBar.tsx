export default function TabBar({
  tabs = [],
  setActiveTab,
  activeTab,
  className = "",
}: {
  tabs: string[];
  setActiveTab: (index: number) => void;
  activeTab: number;
  className?: string;
}) {
  const switchTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={`flex bg-blue-900 ${className}`}>
      <div className="flex flex-grow justify-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 w-full text-white focus:outline-none box-content border-b-4 ${
              activeTab === index ? "bg-blue-950 border-red-500" : "border-transparent"
            } `}
            onClick={() => switchTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
