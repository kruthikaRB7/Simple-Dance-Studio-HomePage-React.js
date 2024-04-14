// import React, { useState } from 'react';
// import Registration from './Registration';

// const Hero = () => {
//   const [showForm, setShowForm] = useState(false);

//   const handleFormToggle = () => {
//     setShowForm(!showForm);
//   };

//   return (
//     <div className="w-full h-screen relative">
//       <img
//         className="top-0 left-0 w-full h-screen object-cover"
//         src="https://images.pexels.com/photos/12312/pexels-photo-12312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//         alt="/"
//       />
//       <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
//       <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
//         <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
//           <p>All Inclusive</p>
//           <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">MJ Shuffling Studio</h1>
//           <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
//           </p>
//           <button onClick={handleFormToggle} className="bg-white text-black">
//             Grab It Today
//           </button>
//           {showForm && <Registration />} 
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// Hero.jsx
import React, { useState } from 'react';
import Registration from './Registration';

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="relative m-auto">
      <img
        className="w-full h-screen object-cover"
        src="https://images.pexels.com/photos/12312/pexels-photo-12312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen m-auto" />
      <div className="absolute inset-0 flex items-center justify-center text-center text-white m-auto">
        <div className="max-w-screen-lg mx-auto p-4 m-auto">
          <p className='m-auto'>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl uppercase m-auto">MJ Shuffling Studio</h1>
          <p className="max-w-md md:max-w-xl py-2 text-lg m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <button onClick={handleFormToggle} className="bg-white text-black px-4 py-2 rounded-lg m-auto">
            Grab It Today
          </button>
          {showForm && <Registration />} 
        </div>
      </div>
    </div>
  );
};

export default Hero;