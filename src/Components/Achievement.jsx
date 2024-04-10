import React from "react";

const Achievement = () => {

    return (
        <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%]px-4 grid lg:grid-cols-3 gap-4">
            <div className="lg:top-20 relative lg:col-span-1 col-span-2">
                <h3 className="text-2xl font-bold">Can Achieve</h3>
                <p className="pt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magni nesciunt illo reiciendis, numquam sed.
                </p>
            </div>

            <div className="grid grid-cols-2 col-span-2 gap-2">
                <img className="object-cover w-full h-full" src="https://demplates.com/wp-content/uploads/2017/11/Ballet_dance_certificate.jpg" alt="/" />
                <img className="row-span-2 object-cover w-full h-full" src="https://as2.ftcdn.net/v2/jpg/06/41/60/25/1000_F_641602512_P6dierIyaee6f5E5B8Yi2g6hefsFWHEh.jpg" alt="/" />
                <img className="object-cover w-full h-full" src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
            </div>
        </div>
    )
}

export default Achievement;