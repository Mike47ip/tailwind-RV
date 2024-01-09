import appartment1 from "../assets/images/appartment1.jpg";
import appartment2 from "../assets/images/appartment2.jpg";
import appartment3 from "../assets/images/appartment3.jpg";
import appartment4 from "../assets/images/appartment4.jpg";
import appartment5 from "../assets/images/appartment5.jpg";
import appartment6 from "../assets/images/appartment6.jpg";
import appartment7 from "../assets/images/appartment7.jpg";
import appartment8 from "../assets/images/appartment8.jpg";

const Card = () => {
 return (
  <>
   <section className="CardWrapper grid gap-6 px-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-1">
    <div className="Cards">
     <img
      className="object-cover h-54 rounded-xl"
      src={appartment1}
      alt="Appartments"
     />
     <ul className="ImageTab flex gap-2 list-none text-sm mt-3">
      <li className="bg-gray-200 px-2 py-1 rounded-2xl text-sm md:text-xs">
       Instant Book
      </li>
      <li className="bg-gray-200 px-2 py-1 rounded-2xl text-sm md:text-xs">
       Self Checkin
      </li>
     </ul>
     <div className="flex justify-between items-center px-2">
      <p className="HouseName text-2xl md:text-lg pt-2 uppercase font-semibold">
       House Name
      </p>
      <span className="text-yellow-500 flex items-center">
       <ion-icon name="star"></ion-icon>
       <span className="text-black">4.23</span>
      </span>
     </div>
     <p className="text-xs px-2 text-gray-600">Location: India</p>

     <div className="flex justify-between mt-6 items-center px-2">
      <span className="roomSpec flex justify-center items-center p-1 border border-gray-300 rounded-2xl gap-1">
       <ion-icon
        className="material-symbols-outlined text-6xl"
        name="bed"
       ></ion-icon>
       3<span className="material-symbols-outlined text-xl">bathtub</span>2
       <ion-icon name="people"></ion-icon>3-4
      </span>
      <p className="prices font-semibold">
       $2.000 <span className="text-gray-500">/n</span>
      </p>
     </div>
    </div>
    <div className="Cards">
     <img
      className="object-cover h-54 rounded-xl"
      src={appartment2}
      alt="Appartments"
     />
     <ul className="ImageTab flex gap-2 list-none text-sm mt-3">
      <li className="bg-gray-200 px-2 py-1 rounded-2xl text-sm md:text-xs">
       Instant Book
      </li>
      <li className="bg-gray-200 px-2 py-1 rounded-2xl text-sm md:text-xs">
       Self Checkin
      </li>
     </ul>
     <div className="flex justify-between items-center px-2">
      <p className="HouseName text-2xl md:text-lg pt-2 uppercase font-semibold">
       House Name
      </p>
      <span className="text-yellow-500 flex items-center">
       <ion-icon name="star"></ion-icon>
       <span className="text-black">4.23</span>
      </span>
     </div>
     <p className="text-xs px-2 text-gray-600">Location: India</p>

     <div className="flex justify-between mt-6 items-center px-2">
      <span className="roomSpec flex justify-center items-center p-1 border border-gray-300 rounded-2xl gap-1">
       <ion-icon
        className="material-symbols-outlined text-6xl"
        name="bed"
       ></ion-icon>
       3<span className="material-symbols-outlined text-xl">bathtub</span>2
       <ion-icon name="people"></ion-icon>3-4
      </span>
      <p className="prices font-semibold">
       $2.000 <span className="text-gray-500">/n</span>
      </p>
     </div>
    </div>
    <div className="Cards">
     <img
      className="object-cover h-54 rounded-xl"
      src={appartment3}
      alt="Appartments"
     />
     <ul className="ImageTab flex gap-2 list-none text-sm mt-3">
      <li className="bg-gray-200 px-2 py-1 rounded-2xl text-sm md:text-xs">
       Instant Book
      </li>
      <li className="bg-gray-200 px-2 py-1 rounded-2xl text-sm md:text-xs">
       Self Checkin
      </li>
     </ul>
     <div className="flex justify-between items-center px-2">
      <p className="HouseName text-2xl md:text-lg pt-2 uppercase font-semibold">
       House Name
      </p>
      <span className="text-yellow-500 flex items-center">
       <ion-icon name="star"></ion-icon>
       <span className="text-black">4.23</span>
      </span>
     </div>
     <p className="text-xs px-2 text-gray-600">Location: India</p>

     <div className="flex justify-between mt-6 items-center px-2">
      <span className="roomSpec flex justify-center items-center p-1 border border-gray-300 rounded-2xl gap-1">
       <ion-icon
        className="material-symbols-outlined text-6xl"
        name="bed"
       ></ion-icon>
       3<span className="material-symbols-outlined text-xl">bathtub</span>2
       <ion-icon name="people"></ion-icon>3-4
      </span>
      <p className="prices font-semibold">
       $2.000 <span className="text-gray-500">/n</span>
      </p>
     </div>
    </div>
    <div className="Cards">
     <img
      className="object-cover h-54 rounded-xl"
      src={appartment4}
      alt="Appartments"
     />
     <ul className="ImageTab flex gap-2 list-none text-sm mt-3">
      <li className="bg-gray-200 px-2 py-1 rounded-2xl text-sm md:text-xs">
       Instant Book
      </li>
      <li className="bg-gray-200 px-2 py-1 rounded-2xl text-sm md:text-xs">
       Self Checkin
      </li>
     </ul>
     <div className="flex justify-between items-center px-2">
      <p className="HouseName text-2xl md:text-lg pt-2 uppercase font-semibold">
       House Name
      </p>
      <span className="text-yellow-500 flex items-center">
       <ion-icon name="star"></ion-icon>
       <span className="text-black">4.23</span>
      </span>
     </div>
     <p className="text-xs px-2 text-gray-600">Location: India</p>

     <div className="flex justify-between mt-6 items-center px-2">
      <span className="roomSpec flex justify-center items-center p-1 border border-gray-300 rounded-2xl gap-1">
       <ion-icon
        className="material-symbols-outlined text-6xl"
        name="bed"
       ></ion-icon>
       3<span className="material-symbols-outlined text-xl">bathtub</span>2
       <ion-icon name="people"></ion-icon>3-4
      </span>
      <p className="prices font-semibold">
       $2.000 <span className="text-gray-500">/n</span>
      </p>
     </div>
    </div>
    <div className="Cards">
     <img
      className="object-cover h-54 rounded-xl"
      src={appartment5}
      alt="Appartments"
     />
     <ul className="ImageTab flex gap-2 list-none text-sm mt-3">
      <li className="bg-gray-200 px-2 py-1 rounded-2xl text-sm md:text-xs">
       Instant Book
      </li>
      <li className="bg-gray-200 px-2 py-1 rounded-2xl text-sm md:text-xs">
       Self Checkin
      </li>
     </ul>
     <div className="flex justify-between items-center px-2">
      <p className="HouseName text-2xl md:text-lg pt-2 uppercase font-semibold">
       House Name
      </p>
      <span className="text-yellow-500 flex items-center">
       <ion-icon name="star"></ion-icon>
       <span className="text-black">4.23</span>
      </span>
     </div>
     <p className="text-xs px-2 text-gray-600">Location: India</p>

     <div className="flex justify-between mt-6 items-center px-2">
      <span className="roomSpec flex justify-center items-center p-1 border border-gray-300 rounded-2xl gap-1">
       <ion-icon
        className="material-symbols-outlined text-6xl"
        name="bed"
       ></ion-icon>
       3<span className="material-symbols-outlined text-xl">bathtub</span>2
       <ion-icon name="people"></ion-icon>3-4
      </span>
      <p className="prices font-semibold">
       $2.000 <span className="text-gray-500">/n</span>
      </p>
     </div>
    </div>
     <div className="Cards">
     <img
      className="object-cover h-54 rounded-xl"
      src={appartment6}
      alt="Appartments"
     />
     <ul className="ImageTab flex gap-2 list-none text-sm mt-3">
      <li className="bg-gray-200 px-2 py-1 rounded-2xl text-sm md:text-xs">
       Instant Book
      </li>
      <li className="bg-gray-200 px-2 py-1 rounded-2xl text-sm md:text-xs">
       Self Checkin
      </li>
     </ul>
     <div className="flex justify-between items-center px-2">
      <p className="HouseName text-2xl md:text-lg pt-2 uppercase font-semibold">
       House Name
      </p>
      <span className="text-yellow-500 flex items-center">
       <ion-icon name="star"></ion-icon>
       <span className="text-black">4.23</span>
      </span>
     </div>
     <p className="text-xs px-2 text-gray-600">Location: India</p>

     <div className="flex justify-between mt-6 items-center px-2">
      <span className="roomSpec flex justify-center items-center p-1 border border-gray-300 rounded-2xl gap-1">
       <ion-icon
        className="material-symbols-outlined text-6xl"
        name="bed"
       ></ion-icon>
       3<span className="material-symbols-outlined text-xl">bathtub</span>2
       <ion-icon name="people"></ion-icon>3-4
      </span>
      <p className="prices font-semibold">
       $2.000 <span className="text-gray-500">/n</span>
      </p>
     </div>
    </div>
     <div className="Cards">
     <img
      className="object-cover h-54 rounded-xl"
      src={appartment7}
      alt="Appartments"
     />
     <ul className="ImageTab flex gap-2 list-none text-sm mt-3">
      <li className="bg-gray-200 px-2 py-1 rounded-2xl text-sm md:text-xs">
       Instant Book
      </li>
      <li className="bg-gray-200 px-2 py-1 rounded-2xl text-sm md:text-xs">
       Self Checkin
      </li>
     </ul>
     <div className="flex justify-between items-center px-2">
      <p className="HouseName text-2xl md:text-lg pt-2 uppercase font-semibold">
       House Name
      </p>
      <span className="text-yellow-500 flex items-center">
       <ion-icon name="star"></ion-icon>
       <span className="text-black">4.23</span>
      </span>
     </div>
     <p className="text-xs px-2 text-gray-600">Location: India</p>

     <div className="flex justify-between mt-6 items-center px-2">
      <span className="roomSpec flex justify-center items-center p-1 border border-gray-300 rounded-2xl gap-1">
       <ion-icon
        className="material-symbols-outlined text-6xl"
        name="bed"
       ></ion-icon>
       3<span className="material-symbols-outlined text-xl">bathtub</span>2
       <ion-icon name="people"></ion-icon>3-4
      </span>
      <p className="prices font-semibold">
       $2.000 <span className="text-gray-500">/n</span>
      </p>
     </div>
    </div>
     <div className="Cards">
     <img
      className="object-cover h-54 rounded-xl"
      src={appartment8}
      alt="Appartments"
     />
     <ul className="ImageTab flex gap-2 list-none text-sm mt-3">
      <li className="bg-gray-200 px-2 py-1 rounded-2xl text-sm md:text-xs">
       Instant Book
      </li>
      <li className="bg-gray-200 px-2 py-1 rounded-2xl text-sm md:text-xs">
       Self Checkin
      </li>
     </ul>
     <div className="flex justify-between items-center px-2">
      <p className="HouseName text-2xl md:text-lg pt-2 uppercase font-semibold">
       House Name
      </p>
      <span className="text-yellow-500 flex items-center">
       <ion-icon name="star"></ion-icon>
       <span className="text-black">4.23</span>
      </span>
     </div>
     <p className="text-xs px-2 text-gray-600">Location: India</p>

     <div className="flex justify-between mt-6 items-center px-2">
      <span className="roomSpec flex justify-center items-center p-1 border border-gray-300 rounded-2xl gap-1">
       <ion-icon
        className="material-symbols-outlined text-6xl"
        name="bed"
       ></ion-icon>
       3<span className="material-symbols-outlined text-xl">bathtub</span>2
       <ion-icon name="people"></ion-icon>3-4
      </span>
      <p className="prices font-semibold">
       $2.000 <span className="text-gray-500">/n</span>
      </p>
     </div>
    </div>

   </section>
  </>
 );
};

export default Card;
