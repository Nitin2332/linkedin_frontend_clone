import React from "react";

function TrendingCard() {
    return (
        <div className="h-max w-max ml-6 mt-6 bg-white rounded-lg">
            <div className="pr-24 rounded-lg border shadow-sm ">
                <div className="ml-4 mt-4 text-xl font-semibold">Trending Now</div>
                <div className="ml-4 my-1 font-semibold text-gray-700">
                    curated by LinkedIn News
                </div>
                <div className="ml-4 font-semibold text-sm py-1">Trending topic 1</div>
                <div className="text-gray-500 ml-4 text-xs">
                    1d ago • 12,322 readers
                </div>
                <div className="ml-4 font-semibold text-sm py-1">Trending topic 2</div>
                <div className="text-gray-500 ml-4 text-xs">2d ago • 2,034 readers</div>
                <div className="ml-4 font-semibold text-sm py-1">Trending topic 3</div>
                <div className="text-gray-500 ml-4 text-xs">3d ago • 1,012 readers</div>
                <div className="ml-4 font-semibold text-sm py-1">Trending topic 4</div>
                <div className="text-gray-500 ml-4 text-xs">4d ago • 876 readers</div>
                <div className="ml-4 font-semibold text-sm py-1">Trending topic 5</div>
                <div className="text-gray-500 ml-4 text-xs">5d ago • 799 readers</div>
                <div className="text-gray-700 ml-4 py-1 pt-2 text-sm font-semibold">
                    Show more--
                </div>
                <div className="text-gray-700 ml-4 pt-4 font-semibold">
                    Today's puzzles
                </div>
                <div className="flex mt-2 ml-3 pb-2">
                    <div className="mt-1">
                        <img src="https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1" />
                    </div>
                    <div>
                        <div className="ml-2 text-sm font-semibold">Queens #104</div>
                        <div className="text-gray-500 ml-2 text-xs">Crown each region</div>
                    </div>
                </div>

                <div className="flex mt-1 ml-3 pb-2">
                    <div className="mt-1">
                        <img src="https://static.licdn.com/aero-v1/sc/h/im5l00imv9odauybfemlfxm6" />
                    </div>
                    <div>
                        <div className="ml-2 text-sm font-semibold">Tango #34</div>

                        <div className="text-gray-500 ml-2 text-xs">Harmonize the grid</div>
                    </div>
                </div>

                <div className="flex mt-1 ml-3 pb-2">
                    <div className="mt-1">
                        <img src="https://static.licdn.com/aero-v1/sc/h/3zbbe4rnqg4embu5uy17dpiph" />
                    </div>
                    <div>
                    <div className="ml-2 text-sm font-semibold">Pinpoint #109</div>
                
                <div className="text-gray-500 ml-2 text-xs">Guess the category</div>
                </div>
                </div>


                <div className="flex mt-1 ml-3">
                    <div className="mt-1">
                        <img src="https://static.licdn.com/aero-v1/sc/h/8ilyk40nkjoeuzohmqsoc6iiv" />
                    </div>
                    <div>
                    <div className="ml-2  text-sm font-semibold">Crossclimb #74</div>
                
                <div className="text-gray-500 ml-2 text-xs mb-4">Unlock a trivia ladder</div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default TrendingCard;
