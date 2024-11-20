import React from "react";
import Me from "../assets/navbar_images/me.svg";
import media from "../assets/home_images/media.svg";
import event from "../assets/home_images/event.svg";
import writeArticle from "../assets/home_images/writeArticle.svg";

function PostCard() {
  return (
    <div className="w-max h-max rounded-lg border shadow-sm ml-6 pr-10 mt-6 bg-white col-span-4">
      <div className="flex">
        <img
          className="ml-3 mt-3 h-11 w-11 border rounded-full bg-orange-500"
          src={Me}
        />
        <input
          className="pl-4 h-11 border-2 border-gray-400 rounded-full w-full my-3 ml-2"
          placeholder="Start a post, try writing with AI"
        ></input>
      </div>
      <div className="flex">
        <div className="flex h-6 w-5 mx-12 my-3 font-semibold">
        <img className=" ml-2 mr-2" src={media}/>
        Video</div>
        <div className="flex h-6 w-5 mx-24 ml-28 my-3 font-semibold">
        <img className="ml-2 mr-2" src={event}/>
        Photo</div>
        <div className="flex h-6 w-5 ml-16 mr-24 my-3 font-semibold">
        <img className="mr-2" src={writeArticle}/> 
        <div className="mr-1">Write</div>   
        <div className="">article</div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
