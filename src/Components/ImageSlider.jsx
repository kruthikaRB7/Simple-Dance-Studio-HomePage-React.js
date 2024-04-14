import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Imageslider = () => {

    const slides = [
        {
            url: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "A",
        },
        {
            url: "https://images.unsplash.com/photo-1596315458574-d99efaea3b3b?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "B"
        },
        {
            url: "https://images.unsplash.com/photo-1601128092070-f01270ebd5c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "C",
        },
        {
            url: "https://images.unsplash.com/photo-1618259181324-86a49fe68099?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "D",
        },
        {
            url: "https://thumbs.dreamstime.com/z/positive-girls-boys-training-hip-hop-dance-studio-dance-classes-kids-kids-training-hip-hop-dance-studio-195869061.jpg?w=992", title: "A",
        },
        {
            url: "https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto/tarangini.jpg", title: "B"
        },
        {
            url: "https://5.imimg.com/data5/SELLER/Default/2022/9/GK/UF/OC/11145795/regular-dance-classes-1000x1000.jpg", title: "C",
        },
        {
            url: "https://www.talanritya.be/sites/default/files/u48/Cours%20Odissi%20Bruxelles.jpeg", title: "D",
        },


    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className="m-auto">
            <h1 className="w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2 justify-center flex top-4 justify-center py-2 text-6xl font-bold m-auto">Gallery</h1>
            <div className="max-w-[1000px] h-[580px] w-full m-auto py-16 px-25 relative group">
                <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}></div>
                {/*Left Arrow*/}
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/*Right Arrow*/}
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>

                <div className="flex top-4 justify-center py-2">
                    {slides.map((slides, slideIndex) => (
                        <div className="text-2xl cursor-pointer"
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}>
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Imageslider;