export default function TabBar({
  tabs = [],
  setActiveTab,
  activeTab,
  className = "",
}:{
  tabs: string[],
  setActiveTab: (index: number) => void,
  activeTab: number,
  className?: string
}){
  const switchTab = (index:number) => {
    setActiveTab(index);
  };

  return (
    <div className={`flex relative bg-sky-900 justify-center ${className}`}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`px-4 py-2 w-full text-white focus:outline-none ${
            activeTab === index ? "bg-blue-950" : ""
          }`}
          onClick={() => switchTab(index)}
        >
          {tab}
        </button>
      ))}
      <div
        className="absolute bottom-0 left-0 w-1/2 bg-red-600 h-1 transition-transform duration-300"
        style={{ transform: `translateX(${activeTab * 100}%)` }}
      ></div>
    </div>
  );
}
