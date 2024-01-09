import Card from "./Card";

const Body = () => {
 return (
  <>
   <section className=" bg-red-50">
    <div className="TabsWrapper flex justify-between items-center py-7 text-xs overflow-x-auto whitespace-nowrap">
     <div className="Tab1 flex gap-8 px-3  list-none">
      <li className="bg-white rounded-3xl border border-gray-300 px-4 py-2 font-inherit font-medium cursor-pointer transition transform hover:bg-red-100 hover:border-red-500 hover:-translate-y-0.5 active:bg-red-400 focus:bg-red-500">
       All
      </li>

      <li className="bg-white rounded-3xl border border-gray-300 px-4 py-2 font-inherit font-medium cursor-pointer transition transform hover:bg-red-100 hover:border-red-500 hover:-translate-y-0.5 active:bg-red-400 focus:bg-red-500">
       Top Villa
      </li>
      <li className="bg-white rounded-3xl border border-gray-300 px-4 py-2 font-inherit font-medium cursor-pointer transition transform hover:bg-red-100 hover:border-red-500 hover:-translate-y-0.5 active:bg-red-400 focus:bg-red-500">
       Free Reschedule
      </li>
      <li className="bg-white rounded-3xl border border-gray-300 px-4 py-2 font-inherit font-medium cursor-pointer transition transform hover:bg-red-100 hover:border-red-500 hover:-translate-y-0.5 active:bg-red-400 focus:bg-red-500">
       Book Now, Pay Later
      </li>
      <li className="bg-white rounded-3xl border border-gray-300 px-4 py-2 font-inherit font-medium cursor-pointer transition transform hover:bg-red-100 hover:border-red-500 hover:-translate-y-0.5 active:bg-red-400 focus:bg-red-500">
       Self CheckIn
      </li>
      <li className="bg-white rounded-3xl border border-gray-300 px-4 py-2 font-inherit font-medium cursor-pointer transition transform hover:bg-red-100 hover:border-red-500 hover:-translate-y-0.5 active:bg-red-400 focus:bg-red-500">
       Instant Book
      </li>
     </div>

     <div className="Tab2 flex gap-8 px-3 list-none">
      <li className="flex justify-center items-center font-inherit font-medium border border-gray-300 rounded-3xl bg-white px-4 py-1 cursor-pointer transition transform hover:bg-red-100 hover:border-red-500 hover:-translate-y-0.5 active:bg-red-400 focus:bg-red-500">
       Filter
       <span className="material-symbols-outlined text-base">filter_alt</span>
      </li>
      <li className="flex justify-center items-center font-inherit font-medium border border-gray-300 rounded-3xl bg-white px-4 py-1 cursor-pointer transition transform hover:bg-red-100 hover:border-red-500 hover:-translate-y-0.5 active:bg-red-400 focus:bg-red-500">
       <span className="text-gray-500 px-inherit">Sort by:</span> Highest Price
       <span className="material-symbols-outlined">expand_more</span>
      </li>
     </div>
    </div>

    <Card />
   </section>
  </>
 );
};

export default Body;
