import React from "react";
import Person4 from "../assets/person4.jpg";
import Person5 from "../assets/person5.jpg";
import Person6 from "../assets/person6.jpg";
import Compass from "../assets/compass.svg";

function GrowConnectionCard() {
    return (
        <div className="h-auto w-auto rounded-lg border shadow-sm ml-5 py-3 mt-5 bg-white">
            <div className="flex ">
                <div className="ml-3">
                    Reach out to the right people to grow your business
                </div>
            </div>

            <div className="flex">
                <div className="ml-3 border-2 border-gray-200 h-auto w-44 rounded-lg shadow-sm mb-10 mt-2">
                    <img
                        height={100}
                        width={100}
                        className="ml-9 mt-3 rounded-full"
                        src={Person4}
                    />
                    <div className="font-semibold ml-7 mt-1">Sandeep Singh</div>
                    <div className="text-gray-700 ml-5 font-light">Managing Director</div>
                    <div className="text-gray-600 text-xs mt-14 ml-7">
                        Based on your profile
                    </div>
                    <button className="text-blue-700 border-2 border-blue-700 font-semibold rounded-full px-11 mt-2 ml-2 hover:bg-blue-100">
                        Connect
                    </button>
                </div>

                <div className="ml-5 border-2 border-gray-200 h-auto w-44 rounded-lg shadow-sm mb-10 mt-2">
                    <img
                        height={100}
                        width={100}
                        className="ml-9 mt-3 rounded-full"
                        src={Person5}
                    />
                    <div className="font-semibold ml-9 mt-1">Nilanjan Das</div>
                    <div className="text-gray-700 ml-5 font-light">
                        Vice President & head-supply chain...{" "}
                    </div>
                    <div className="text-gray-600 text-xs mt-8 ml-7">
                        Based on your profile
                    </div>
                    <button className="text-blue-700 border-2 border-blue-700 rounded-full px-11 mt-2 ml-2 hover:bg-blue-100">
                        Connect
                    </button>
                </div>

                <div className="ml-5 border-2 border-gray-200 h-auto w-44 rounded-lg shadow-sm mb-10 mt-2">
                    <img
                        height={100}
                        width={100}
                        className="ml-9 mt-3 rounded-full"
                        src={Person6}
                    />
                    <div className="font-semibold ml-5 mt-1">HARPREET SINGH</div>
                    <div className="text-gray-700 ml-3 font-light">
                        Learn | Un-Learn | Re-Learn | Leadership | ...
                    </div>
                    <div className="text-gray-600 text-xs mt-8 ml-7">
                        Based on your profile
                    </div>
                    <button className="text-blue-700 border-2 mb-3 border-blue-700 rounded-full px-11 mt-2 ml-2 hover:bg-blue-100">
                        Connect
                    </button>
                </div>

                <div className="ml-5 border-2 border-gray-200 h-auto w-48 rounded-lg shadow-sm mb-10 mt-2">
                    <img className="ml-1 px-16 mt-4" src={Compass} />
                    <div className="font-semibold ml-7 mt-2">
                        View the rest with Sales Navigator
                    </div>
                    <div className=" ml-7 text-sm mt-2">
                        Reach out to anyone, even those not in your network.
                    </div>
                    <button className="bg-orange-300 rounded-full px-3 py-1 ml-14 mt-5 hover:bg-orange-400">
                        Try Now
                    </button>
                    <div className="text-gray-600 text-xs mt-1 ml-7">
                        Cancel anytime, for any reason.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GrowConnectionCard;
