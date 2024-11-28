import React from "react";

function GameCard() {
    return (
        <div className="h-auto w-auto rounded-lg border shadow-sm ml-5 py-3 mt-4 bg-white">
            <div className="ml-3">Stay in touch through daily games</div>

            <div className="flex ml-3  py-2 pt-6 space-x-16">
                <div className="flex ">
                    <div>
                        <img
                            className="h-10"
                            src="https://static.licdn.com/aero-v1/sc/h/im5l00imv9odauybfemlfxm6"
                        />
                    </div>
                    <div className="ml-2 ">
                        <div className="flex ">
                            
                            <div className="font-semibold">Tango</div>
                            <div># 34</div>
                            <button className=" border-2 border-blue-800 text-blue-800 ml-8 px-2 rounded-full hover:bg-blue-100">
                                Play
                            </button>
                        </div>
                        <div className="text-xs text-gray-700 ">Sunday, Nov 17</div>
                    </div>
                </div>

                <div className="flex  ">
                    <div>
                        <img
                            className="h-10"
                            src="https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1"
                        />
                    </div>
                    <div className="ml-2">
                        <div className="flex">
                            <div className="font-semibold">Queens</div>
                            <div># 104</div>
                            <button className="border-2 border-blue-800 text-blue-800 ml-8 px-2 rounded-full hover:bg-blue-100">
                                Play
                            </button>
                        </div>
                        <div className="text-xs text-gray-700">Sunday, Nov 17</div>
                    </div>
                </div>

                <div className="flex">
                    <div>
                        <img
                            className="h-10"
                            src="https://static.licdn.com/aero-v1/sc/h/3zbbe4rnqg4embu5uy17dpiph"
                        />
                    </div>
                    <div className="ml-2">
                        <div className="flex">
                            <div className="font-semibold">Pinpoint</div>
                            <div># 109</div>
                            <button className="border-2 border-blue-800 text-blue-800 ml-8 px-2 rounded-full hover:bg-blue-100">
                                Play
                            </button>
                        </div>
                        <div className="text-xs text-gray-700">Sunday, Nov 17</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameCard;
