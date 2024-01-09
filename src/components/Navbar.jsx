import { useState } from "react";
import ghflag from "../assets/images/ghflag.png";
import passport from "../assets/images/passport_pic.jpeg";
import "../App.css";

export const Navbar = () => {
 const [isMenuOpen, setMenuOpen] = useState(false);

 const toggleMenu = () => {
  setMenuOpen(!isMenuOpen);
 };

 const closeMenu = () => {
  setMenuOpen(false);
 };
 return (
  <>
   <section>
    <div className="MobileNav flex justify-between items-center p-6 md:hidden">
     <div className="flex justify-center items-center text-bold">
      <span className="material-symbols-outlined text-2xl text-red-500">
       church
      </span>{" "}
      <span className="text-3xl">FIC</span>
     </div>
     <div
      className="Menu flex items-center gap-1 border border-gray-300 rounded-full p-1 cursor-pointer"
      onClick={toggleMenu}
     >
      <img className="object-cover h-7 rounded-full" src={passport} alt="" />
      <p className="text-sm font-semibold p-0.5">Nana Adjei</p>
      <span className="material-symbols-outlined text-sm font-bold">menu</span>
     </div>
    </div>
    <div className="TopNave hidden items-center justify-between px-5 md:flex">
     <div className="flex justify-center items-center text-bold">
      <span className="material-symbols-outlined text-2xl text-red-500">
       church
      </span>{" "}
      <span className="text-3xl">FIC</span>
     </div>

     <div className=" p-6 bg-white rounded-full max-w-6xl">
      {/* Search input and button */}
      <div className="flex text-sm items-center border border-gray-300 rounded-full">
       <input
        type="text"
        placeholder="Search anything..."
        className="w-full rounded-full pl-5 outline-none"
       />

       <p className="text-sm px-3 w-36 border-l-2 text-center hidden lg:block">
        Add guest
       </p>
       <p className="text-sm px-3 w-36 border-l-2 text-center hidden lg:block">
        Add room
       </p>

       <button className="flex items-center justify-center bg-red-400 text-white px-2 py-2 rounded-full">
        <span className="material-symbols-outlined">search</span>
       </button>
      </div>
     </div>

     <div className="flex items-center gap-6">
      <button className="flex items-center justify-center border border-red-500 text-red-500 text-sm px-2 py-2 rounded-full hover:cursor-pointer hover:bg-red-500 hover:text-white transform transition-all">
       Sewo Your House
      </button>

      <div className=" rounded-full border border-gray-400 p-0.5 ">
       <img className="object-cover h-8 w-8   p-1" src={ghflag} alt="" />
      </div>
      <div className="flex items-center gap-1 border border-gray-300 rounded-full p-1">
       <img className="object-cover h-7 rounded-full" src={passport} alt="" />
       <p className="text-sm font-semibold p-0.5">Nana Adjei</p>
       <span className="material-symbols-outlined text-sm font-bold">menu</span>
      </div>
     </div>
    </div>

    <div className="NavContainer hidden lg:flex  justify-center gap-14 py-6 px-4 border-t border-b border-gray-300">
     <div className="flex flex-col items-center">
      <span className="Icon text-gray-500 ">Hotel</span>
      <span className="material-symbols-outlined text-gray-600">bed</span>
     </div>
     <div className="flex flex-col items-center">
      <span className="Icon text-gray-500">Appartment</span>
      <span className="material-symbols-outlined text-gray-600">apartment</span>
     </div>
     <div className="flex flex-col items-center">
      <span className="Icon text-gray-500">Villa</span>
      <span className="material-symbols-outlined text-gray-600">villa</span>
     </div>
     <div className="flex flex-col items-center">
      <span className="Icon text-gray-500">Mansion</span>
      <span className="material-symbols-outlined text-gray-600">castle</span>
     </div>
     <div className="flex flex-col items-center">
      <span className="Icon text-gray-500">Cabin</span>
      <span className="material-symbols-outlined text-gray-600">cabin</span>
     </div>
     <div className="flex flex-col items-center">
      <span className="Icon text-gray-500">Tiny House</span>
      <span className="material-symbols-outlined text-gray-600">house</span>
     </div>
     <div className="flex flex-col items-center">
      <span className="Icon text-gray-500">Camp House</span>
      <span className="material-symbols-outlined text-gray-600">
       home_app_logo
      </span>
     </div>
     <div className="flex flex-col items-center">
      <span className="Icon text-gray-500">Trailer</span>
      <span className="material-symbols-outlined text-gray-600">rv_hookup</span>
     </div>
     <div className="flex flex-col items-center">
      <span className="Icon text-gray-500">Tree House</span>
      <span className="material-symbols-outlined text-gray-600">rv_hookup</span>
     </div>
     <div className="flex flex-col items-center">
      <span className="Icon text-gray-500">Beach House</span>
      <span className="material-symbols-outlined text-gray-600">hot_tub</span>
     </div>
    </div>
    {isMenuOpen && (
     <div className="Dropdownmenu bg-white p-4 transform transition-all duration-300 md:hidden grid grid-cols-2 justify-center items-center">
      {/* Add your menu items here */}
      <div className="flex items-center p-2 gap-2 cursor-pointer hover:text-red-400" onClick={closeMenu}>
       <p>Hotel</p>
       <span className="material-symbols-outlined text-gray-600">bed</span>
      </div>
      <div className="flex items-center p-2 gap-2 cursor-pointer hover:text-red-400" onClick={closeMenu}>
       <p>Appartment</p>
       <span className="material-symbols-outlined text-gray-600">
        apartment
       </span>
      </div>
      <div className="flex items-center p-2 gap-2 cursor-pointer hover:text-red-400" onClick={closeMenu}>
       <p>Villa</p>
       <span className="material-symbols-outlined text-gray-600">villa</span>
      </div>
      <div className="flex items-center p-2 gap-2 cursor-pointer hover:text-red-400" onClick={closeMenu}>
       <p>Castle</p>
       <span className="material-symbols-outlined text-gray-600">castle</span>
      </div>
      <div className="flex items-center p-2 gap-2 cursor-pointer hover:text-red-400" onClick={closeMenu}>
       <p>Cabin</p>
       <span className="material-symbols-outlined text-gray-600">cabin</span>
      </div>
      <div className="flex items-center p-2 gap-2 cursor-pointer hover:text-red-400" onClick={closeMenu}>
       <p>House</p>
       <span className="material-symbols-outlined text-gray-600">house</span>
      </div>

      {/* ... */}
     </div>
    )}
   </section>
  </>
 );
};
