import React from "react";

const Offers = () => {
    return (
        <div className="max-w-[900px] m-auto px-4 py-12 flex flex-wrap justify-between">
            <a href="#practice" className="text-lg font-bold text-gray-700 hover:text-blue-500 hover:underline">
                Practice
            </a>
            <a href="#rates" className="text-lg font-bold text-gray-700 hover:text-blue-500 hover:underline">
                Competitive Rates
            </a>
            <a href="#session" className="text-lg font-bold text-gray-700 hover:text-blue-500 hover:underline">
                Session
            </a>
            <a href="#forms" className="text-lg font-bold text-gray-700 hover:text-blue-500 hover:underline">
                Different Forms
            </a>
        </div>
    );
};

export default Offers;
