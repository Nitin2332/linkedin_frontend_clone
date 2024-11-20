import React from "react";
import Me from "../assets/navbar_images/me.svg";

function HomeProfileCard() {
  return (
    <div className="w-max h-max rounded-lg border shadow-sm ml-48 mt-6 bg-white">
      <img
        className="ml-20 mt-4 h-16 w-16 border rounded-full bg-orange-500"
        src={Me}
      />
      <div className="ml-16">Nitin Rajpoot</div>
      <div className="text-gray-500 ml-5 mr-5 text-xs">
        Student at Manipal university Jaipur
      </div>
      <hr className="h-px my-3 bg-gray-200 border-0"></hr>
      <div className="text-gray-700 ml-2 text-xs font-semibold">
        Profile viewers
      </div>
      <div className="text-gray-700 ml-2 mt-2 text-xs font-semibold">
        Connections
      </div>
      <div className="text-black ml-2 text-xs font-semibold">
        Manage your network
      </div>
      <hr className="h-px my-3 bg-gray-200 border-0"></hr>
      <div className="text-gray-500 ml-2 mt-2 text-xs">
        Access exclusive tools & insights
      </div>
      <div className="text-black ml-2 text-xs font-semibold">
        Network smarter with premium
      </div>
      <hr className="h-px my-3 bg-gray-200 border-0"></hr>
      <div className="ml-2 text-sm font-semibold mb-2">Saved items</div>
    </div>
  );
}

export default HomeProfileCard;
