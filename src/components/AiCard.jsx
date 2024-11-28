import React from "react";
import AiLogo from "../assets/ai.svg";
import preferenceLogo from "../assets/preference.svg";
import jobsLogo from "../assets/myJobs.svg";
import interviewLogo from "../assets/interviewPrep.svg";
import writingLogo from "../assets/writing logo.svg";

function AiCard() {
  return (
    <div>
      <div className="h-auto w-auto rounded-lg border shadow-sm ml-48 mt-5 py-3 bg-white">
        <div className="flex py-4 pl-4 hover:bg-gray-100">
          <img className="h-6" src={AiLogo} />
          <div className="ml-5 font-semibold">Find jobs with AI</div>
        </div>
        <div className="flex py-4 pl-4 hover:bg-gray-100">
          <img className="h-6" src={preferenceLogo} />
          <div className="ml-5 font-semibold">Preferences</div>
        </div>
        <div className="flex py-4 pl-4 hover:bg-gray-100">
          <img className="h-6" src={jobsLogo} />
          <div className="ml-5 font-semibold">My jobs</div>
        </div>
        <div className="flex py-4 pl-4 hover:bg-gray-100">
          <img className="h-6" src={interviewLogo} />
          <div className="ml-5 font-semibold">Interview prep</div>
        </div>
      </div>
      <button className="flex ml-48 py-2 my-3 px-9 hover:bg-blue-100 rounded-full text-blue-600 font-semibold border-2 border-blue-600">
        <img className="h-6 mr-1" src={writingLogo} />
        Start hiring with AI
      </button>
    </div>
  );
}

export default AiCard;
