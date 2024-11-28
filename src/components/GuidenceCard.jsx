import React from "react";
import resumeLogo from "../assets/resume.gif";
import LinkedInNameLogo from "../assets/linkedinname.svg";

function GuidenceCard() {
  return (
    <div>
      <div className="h-auto w-72 rounded-lg border shadow-sm ml-6 py-2 mt-5 bg-white">
        <div className="mt-4 ml-4 font-semibold">Job seeker guidence</div>

        <div className="ml-4 text-xs text-slate-700 mb-2">
          Recommended based on your activity
        </div>
        <div className="flex hover:bg-gray-300">
          <div className="my-4 ml-4 font-semibold text-sm">
            I want to improve my resume
          </div>
          <img className="rounded-lg h-14 mt-2 mr-4" src={resumeLogo} />
        </div>
        <div className="ml-3 text-sm mt-5">
          Explore our curated guide of expert-led courses, such as how to
          improve your resume and grow your network, to help you land your next
          opportunity.
        </div>
        <div className="ml-3 py-1 pb-2 text-sm font-semibold text-gray-700">
          Show more →
        </div>
      </div>
      <div>
        <div className="ml-20 mt-4 text-xs text-gray-600 space-x-4 flex ">
          <div className="hover:text-blue-700 hover:underline">About</div>
          <div className="hover:text-blue-700 hover:underline">
            Accessibility
          </div>
          <div className="hover:text-blue-700 hover:underline">Help Center</div>
        </div>

        <div className="ml-24 mt-2 text-xs text-gray-600 space-x-4 flex">
          <div className="hover:text-blue-700 hover:underline">
            Privacy & Terms
          </div>
          <div className="hover:text-blue-700 hover:underline">Ad Choices</div>
        </div>

        <div className="ml-20 mt-2 text-xs text-gray-600 space-x-4 flex">
          <div className="hover:text-blue-700 hover:underline">Advertising</div>
          <div className="hover:text-blue-700 hover:underline">
            Bussiness Services
          </div>
        </div>

        <div className="ml-24 mt-2 text-xs text-gray-600 space-x-4 flex">
          <div className="hover:text-blue-700 hover:underline">
            Get the LinkedIn app
          </div>
          <div className="hover:text-blue-700 hover:underline">More</div>
        </div>

        <div className="ml-14 text-sm space-x-1 flex">
          <div>
            <img className="h-16" src={LinkedInNameLogo} />
          </div>
          <div className="mt-5">LinkedIn Corporation © 2024</div>
        </div>
      </div>
    </div>
  );
}

export default GuidenceCard;
