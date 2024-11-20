import React from "react";

function RecentCard() {
    return (
        <div className="h-max w-max rounded-lg border shadow-sm ml-48 mt-1.5 bg-white">
            <div className="text-gray-700 ml-3 text-xs py-2 mt-1">Recent</div>
            <div className="text-gray-700 ml-3 text-xs mb-2 mr-24 font-semibold">
                Recent visits pages......
            </div>
            <div className="text-gray-700 ml-3 text-xs font-semibold">
                Recent visits pages 2
            </div>
            <div className="text-blue-600 ml-3 text-xs font-semibold pt-4">
                Groups
            </div>
            <div className="text-gray-700 ml-3 text-xs mb-1  font-semibold pt-2">
                Recent visits groups 1
            </div>
            <div className="text-gray-700 ml-3 text-xs mb-1 font-semibold pt-1">
                Recent visits groups 2
            </div>
            <div className="text-gray-700 ml-7 text-xs mb-2 font-semibold pt-1">
                See all
            </div>
            <div className="text-blue-600 ml-3 text-xs font-semibold pt-4">
                Events
            </div>
            <div className="text-blue-600 ml-3 text-xs font-semibold pt-3">
                Followed Hashtags
            </div>
            <hr className="h-px my-3 bg-gray-200 border-0"></hr>
            <div className="text-gray-800 ml-16 text-sm font-semibold pb-4">
                Discover more
            </div>
        </div>
    );
}

export default RecentCard;
