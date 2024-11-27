import React from "react";
import ApplePoster from "../assets/home_images/apple.jpg";
import Like from "../assets/home_images/like.svg";
import Like2 from "../assets/home_images/like2.svg";
import Comment from "../assets/home_images/comment.svg";
import Repost from "../assets/home_images/repost.svg";
import Send from "../assets/home_images/send.svg";
import AppleLogo from "../assets/home_images/applelogo.svg";
import IITposter from "../assets/home_images/iit.jpg";
import MongoDBposter from "../assets/home_images/mongo.jpg";
import IITlogo from "../assets/home_images/iitlogo.webp";
import DBlogo from "../assets/home_images/MongoDBLogo.svg";
import Clapping from "../assets/home_images/clapping-hands.svg";
import Support from "../assets/home_images/charity.svg";
import Love from "../assets/home_images/love.svg";
import Idea from "../assets/home_images/light-bulb.svg";
import Funny from "../assets/home_images/lauging.svg";


function UpdateCard() {
  return (
    <div>
      <div className="flex">
      <hr className="h-px w-4/5 my-4 ml-6 border-1 border-gray-400"></hr>
      <div className="ml-2 mt-2 text-xs text-gray-700">Sort by: </div>
      <div className="mt-2 text-xs font-semibold ml-1">Top ▼</div>
      </div>
      <div className="h-max w-max rounded-lg border shadow-sm ml-6  bg-white col-span-4">
        <div className="flex">
          <div>
            <img className="ml-5 mt-4" src={AppleLogo} />
          </div>
          <div>
            <div className="ml-3 mt-4 mr-96 font-semibold">Apple</div>
            <div className="ml-3 text-xs text-gray-500">Promoted</div>
          </div>
        </div>
        <div className="ml-4 mr-24 mt-2 text-sm">
          Blazing-fast performance on the new MacBook Pro. Supercharged by M4
        </div>
        <img className="mt-2" height={565} width={565} src={ApplePoster} />
        <div className="flex">
          <div className="my-2 ml-3 text-sm font-semibold">
            Switch to Mac. power up.
          </div>
          <button className="bg-transparent h-6 text-sm font-semibold text-blue-700 mt-2 ml-72 px-3 border border-blue-700 rounded-full">
            Learn more
          </button>
        </div>
        <hr className="h-px my-3 bg-gray-200 border-0"></hr>
        <div className="flex px-4 py-1 pb-4">
          <button className="flex pl-6 group relative">
          <img className="h-6" src={Like} />
          <div className="ml-1.5 font-semibold text-sm">Like</div>
          <div className="absolute hidden -mt-16 text-black group-hover:flex space-x-1">
            <img className="h-12" src={Like2} />
            <img className="h-12" src={Clapping} />
            <img className="h-12" src={Support} />
            <img className="h-12" src={Love} />
            <img className="h-12" src={Idea} />
            <img className="h-12" src={Funny} />
          </div>
          </button>
          <button className="flex pl-16">
          <img className="h-6" src={Comment} />
          <div className="ml-1.5 font-semibold text-sm">Comment</div>
          </button>
          <button className="flex pl-16">
          <img className="h-6" src={Repost} />
          <div className="ml-1.5 font-semibold text-sm">Repost</div>
          </button>
          <button className="flex pl-16">
          <img className="h-6" src={Send} />
          <div className="ml-1.5 font-semibold text-sm">Send</div>
          </button>
        </div>
      </div>

      <div className="h-max w-max rounded-lg border shadow-sm ml-6 mt-2 bg-white">
        <div className="flex">
          <div>
            <img className="ml-5 mt-5 h-9" src={IITlogo} />
          </div>
          <div>
            <div className="ml-3 mt-4 font-semibold">
              IIT Roorkee - Applied Finance, Credit & Crime Risk Management
            </div>
            <div className="ml-3 text-xs text-gray-500">Promoted</div>
          </div>
        </div>
        <div className="ml-4 mt-2 text-sm">A new era of excellence.</div>
        <img className="mt-2" height={565} width={565} src={IITposter} />
        <div className="flex">
          <div className="my-2 ml-3 text-sm font-semibold">
            IIT Roorkee - Applied Finance, Credit & Crime Risk Management
            Program
          </div>

          <button className="bg-transparent h-6 text-sm font-semibold text-blue-700 mt-2 ml-4 px-3 border border-blue-700 rounded-full">
            Apply
          </button>
        </div>
        <hr className="h-px my-3 bg-gray-200 border-0"></hr>
        <div className="flex px-4 py-1 pb-4">
          <button className="flex pl-6">
          <img className="h-6" src={Like} />
          <div className="ml-1.5 font-semibold text-sm">Like</div>
          </button>
          <button className="flex pl-16">
          <img className="h-6" src={Comment} />
          <div className="ml-1.5 font-semibold text-sm">Comment</div>
          </button>
          <button className="flex pl-16">
          <img className="h-6" src={Repost} />
          <div className="ml-1.5 font-semibold text-sm">Repost</div>
          </button>
          <button className="flex pl-16">
          <img className="h-6" src={Send} />
          <div className="ml-1.5 font-semibold text-sm">Send</div>
          </button>
        </div>
      </div>

      <div className="h-max w-max rounded-lg border shadow-sm ml-6 mt-2 bg-white">
        <div className="flex">
          <div>
            <img className="ml-5 mt-4 h-9 w-9" src={DBlogo} />
          </div>
          <div>
            <div className="ml-3 mt-4 font-semibold">MongoDB</div>
            <div className="ml-3 text-xs text-gray-500">Promoted</div>
          </div>
        </div>
        <div className="ml-4 mt-2 text-sm">
          How to Get Started with MongoDB.
        </div>
        <img className="mt-2" height={565} width={565} src={MongoDBposter} />
        <div className="flex">
          <div className="my-2 ml-3 text-sm font-semibold">
            How to Get Started with MongoDB.{" "}
          </div>

          <button className="bg-transparent h-6 text-sm font-semibold text-blue-700 mt-2 ml-56 px-3 border border-blue-700 rounded-full">
            Learn more
          </button>
        </div>
        <hr className="h-px my-3 bg-gray-200 border-0"></hr>
        <div className="flex px-4 py-1 pb-4">
          <button className="flex pl-6">
          <img className="h-6" src={Like} />
          <div className="ml-1.5 font-semibold text-sm">Like</div>
          </button>
          <button className="flex pl-16">
          <img className="h-6" src={Comment} />
          <div className="ml-1.5 font-semibold text-sm">Comment</div>
          </button>
          <button className="flex pl-16">
          <img className="h-6" src={Repost} />
          <div className="ml-1.5 font-semibold text-sm">Repost</div>
          </button>
          <button className="flex pl-16">
          <img className="h-6" src={Send} />
          <div className="ml-1.5 font-semibold text-sm">Send</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateCard;
