import React from "react";
import LinkedinNameLogo from "../assets/linkedinname.svg";
import ArticleLogo from "../assets/article.svg";
import PeopleLogo from "../assets/people.svg";
import LearningLogo from "../assets/learning.svg";
import JobsLogo from "../assets/jobs.svg";
import GamesLogo from "../assets/games.svg";
import GetLogo from "../assets/gettheapp.svg";

function Topbar2() {
  return (
    <>
      <div className="flex pl-44">
        <img className="h-16" src={LinkedinNameLogo} />
        <div className="pl-80 space-x-11 mt-5">
          <button className="text-xs text-gray-600">
            <img className="h-5 ml-2" src={ArticleLogo} />
            Articles
          </button>

          <button className="text-xs text-gray-600">
            <img className="h-5 ml-2" src={PeopleLogo} />
            People
          </button>

          <button className="text-xs text-gray-600">
            <img className="h-5 ml-3" src={LearningLogo} />
            Learning
          </button>

          <button className="text-xs text-gray-600">
            <img className="h-5 ml-0.5" src={JobsLogo} />
            Jobs
          </button>

          <button className="text-xs text-gray-600">
            <img className="h-5 ml-2" src={GamesLogo} />
            Games
          </button>

          <button className="text-xs text-gray-600">
            <img className="h-5 ml-5" src={GetLogo} />
            Get the app
          </button>
        </div>
        <div className="font-semibold ml-10 mt-4 hover:bg-gray-100 rounded-full px-5 py-3 hover:cursor-pointer">
          Join now
        </div>
        <button className="ml-2 mt-4 border px-6 border-blue-600 rounded-full text-blue-600 font-semibold hover:bg-blue-50">
          Sign in
        </button>
      </div>
    </>
  );
}

export default Topbar2;
