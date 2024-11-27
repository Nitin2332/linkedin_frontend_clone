import React from "react";
import Me from "../assets/navbar_images/me.svg";
import BookmarkLogo from "../assets/home_images/bookmark.svg"

function HomeProfileCard() {
  return (
    <div className="w-max h-max rounded-lg border shadow-sm ml-48 mt-6 bg-white">
      <img
        className="ml-20 mt-4 h-16 w-16 border rounded-full bg-orange-500"
        src={Me}
      />
      <div className="ml-16 font-semibold hover:underline">Nitin Rajpoot</div>
      <div className="text-gray-500 ml-5 mr-5 text-xs">
        Student at Manipal university Jaipur
      </div>
      <hr className="h-px my-3 bg-gray-200 border-0"></hr>
    
      <div className="text-gray-700 pl-2 py-1 text-xs font-semibold hover:bg-stone-200">
        Profile viewers
      </div>
      <div className="hover:bg-stone-200 pl-2 py-1">
      <div className="text-gray-700 text-xs font-semibold ">
        Connections
      </div>
      <div className="text-black text-xs font-semibold ">
        Manage your network
      </div>
      </div>
      <hr className="h-px mt-3 bg-gray-200 border-0"></hr>
      <div className="hover:bg-stone-200 pl-2 py-3">
      <div className="text-gray-500 text-xs">
        Access exclusive tools & insights
      </div>
      <div className="text-black text-xs font-semibold">
        Network smarter with premium
      </div>
      </div>
      <hr className="h-px bg-gray-200 border-0"></hr>
      <div className="flex hover:bg-stone-200">
      <img className="h-4 mt-3 ml-2" src={BookmarkLogo}/>
      <div className=" py-3 pl-1 text-xs font-semibold">Saved items</div>
      </div>
    </div>
  );
}

export default HomeProfileCard;
