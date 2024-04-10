import React, { useState } from "react";
import Registration from "./Registration";

const Plan = () => {
    const [showForm, setShowForm] = useState(false);

    const handleLinkClick = (event) => {
        event.preventDefault();
    };

    const handleFormToggle = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
            {/* Left Side*/}
            <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
                <img className="row-span-3 object-cover w-full h-full p-2"src="https://images.unsplash.com/photo-1529229504105-4ea795dcbf59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
                <img className="row-span-2 object-cover w-full h-full p-2"src="https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
                <img className="row-span-2 object-cover w-full h-full p-2"src="https://media.istockphoto.com/id/944112198/photo/dance-form-indian-classical-feet-with-ghungru-bharatnatyam-katthak.jpg?s=1024x1024&w=is&k=20&c=b1ePm9O9u8lRIkKkaLKuL3KTJ2qYhdhwLPjtKYGqO8w=" alt="/" />
                <img className="row-span-3 object-cover w-full h-full p-2"src="https://images.pexels.com/photos/4872051/pexels-photo-4872051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
                <img className="row-span-2 object-cover w-full h-full p-2"src="https://images.pexels.com/photos/5370354/pexels-photo-5370354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
            </div>

            {/* Right Side*/}
            <div className="flex flex-col h-full justify-center">
                <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Move</h3>
                <p className="text-2xl py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, magnam!</p>
                <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quae dolores quas aliquam laudantium illo veritatis libero aspernatur perspiciatis voluptatum? Culpa dolore voluptatibus sapiente itaque officia fugit nostrum voluptate quis.</p>
                <div>
                    <button className="border-black mr-4 hover:shadow-xl" onClick={handleLinkClick}>
                        Have a Look
                    </button>
                    <button onClick={handleFormToggle} className="bg-black text-white hover:shadow-xl ">
                        Book the Session
                    </button>
                    {showForm && <Registration />} {/* Render the Registration component conditionally */}
                </div>
            </div>
        </div>
    );
};

export default Plan;
