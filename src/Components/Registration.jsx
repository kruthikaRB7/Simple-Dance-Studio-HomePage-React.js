// import React, { useState } from 'react';

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     course: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="container mx-100 my-100 mt-8 m-auto center m-auto">
//       <h1 className="text-3xl font-bold mb:-40 ml-4">Student Registration Form</h1>
//       <form onSubmit={handleSubmit} className="max-w-md m-auto">
//         <div className="flex flex-wrap mx-2">
//           <div className="w-full md:w-2/4 px-2 mb-0">
//             <label htmlFor="firstName" className="block text-gray-600 font-medium mb-2">
//               First Name
//             </label>
//             <input type="text" id="firstName" name="firstName" autoComplete='off' value={formData.firstName} onChange={handleChange}
//               className="w-full p-2 border border-gray-900 rounded text-gray-900" required />
//           </div>

//           <div className="w-full md:w-1/4 px-2 mb-0">
//             <label htmlFor="lastName" className="block text-gray-600 font-medium mb-2">
//               Last Name
//             </label>
//             <input type="text" id="lastName" name="lastName" autoComplete='off' value={formData.lastName} onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded text-gray-900" required />
//           </div>

//           <div className="w-full md:w-1/4 px-2 mb-0">
//             <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
//               Email
//             </label>
//             <input type="email" id="email" name="email" autoComplete='off' value={formData.email}
//               onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-gray-900" required />
//           </div>

//           <div className="w-full md:w-2/3 px-2 mb-0">
//             <label htmlFor="phoneNumber" className="block text-gray-600 font-medium mb-2">
//               Phone Number
//             </label>
//             <input type="tel" id="phoneNumber" name="phoneNumber" autoComplete='off' value={formData.phoneNumber}
//               onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-gray-900" required />
//           </div>

//           <div className="w-full px-3 mb-4 md:w-1/4 mb-1">
//             <label htmlFor="course" className="block text-gray-600 font-medium mb-2">
//               Course
//             </label>
//             <input type="text" id="course" name="course" autoComplete='off' value={formData.course}
//               onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-gray-900" required />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-green-700 ml-4">
//           Submit
//         </button>

//         <button
//           type="reset"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-700 ml-20">
//           Clear
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Registration;


import React, { useState } from 'react';

const Registration = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    course: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="container mx-100 my-100 mt-8 m-auto center m-auto">
      <h1 className="text-3xl font-bold mb:-40 ml-4">Student Registration Form</h1>
      <form onSubmit={handleSubmit} onReset={handleReset} className="max-w-md m-auto">
        <div className="flex flex-wrap mx-2">
          <div className="w-full md:w-2/4 px-2 mb-0">
            <label htmlFor="firstName" className="block text-gray-600 font-medium mb-2">
              First Name
            </label>
            <input type="text" id="firstName" name="firstName" autoComplete='off' value={formData.firstName} onChange={handleChange}
              className="w-full p-2 border border-gray-900 rounded text-gray-900" required />
          </div>

          <div className="w-full md:w-1/4 px-2 mb-0">
            <label htmlFor="lastName" className="block text-gray-600 font-medium mb-2">
              Last Name
            </label>
            <input type="text" id="lastName" name="lastName" autoComplete='off' value={formData.lastName} onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-gray-900" required />
          </div>

          <div className="w-full md:w-1/4 px-2 mb-0">
            <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
              Email
            </label>
            <input type="email" id="email" name="email" autoComplete='off' value={formData.email}
              onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-gray-900" required />
          </div>

          <div className="w-full md:w-2/3 px-2 mb-0">
            <label htmlFor="phoneNumber" className="block text-gray-600 font-medium mb-2">
              Phone Number
            </label>
            <input type="tel" id="phoneNumber" name="phoneNumber" autoComplete='off' value={formData.phoneNumber}
              onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-gray-900" required />
          </div>

          <div className="w-full px-3 mb-4 md:w-1/4 mb-1">
            <label htmlFor="course" className="block text-gray-600 font-medium mb-2">
              Course
            </label>
            <input type="text" id="course" name="course" autoComplete='off' value={formData.course}
              onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-gray-900" required />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-green-700 ml-4">
          Submit
        </button>

        <button
          type="reset"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-700 ml-20">
          Clear
        </button>
    
      </form >
    </div >
  );
};

export default Registration;
