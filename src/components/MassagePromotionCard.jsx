import React from "react";
import resumeLogo from "../assets/resume.gif";
import LinkedInNameLogo from "../assets/linkedin.svg";
import PromotionPhoto from "../assets/massagePromotion.jpg";

function MassagePromotionCard() {
  return (
    <div className="ml-9">
      <div className="mt-6">
        <img src={PromotionPhoto} />
      </div>
      <div>
        <div className="justify-center mt-4 text-xs text-gray-600 space-x-4 flex  ">
          <div className="hover:text-blue-700 hover:underline">About</div>
          <div className="hover:text-blue-700 hover:underline">
            Accessibility
          </div>
          <div className="hover:text-blue-700 hover:underline">Help Center</div>
        </div>

        <div className="justify-center mt-2 text-xs text-gray-600 space-x-4 flex">
          <div className="hover:text-blue-700 hover:underline">
            Privacy & Terms
          </div>
          <div className="hover:text-blue-700 hover:underline">Ad Choices</div>
        </div>

        <div className="justify-center mt-2 text-xs text-gray-600 space-x-4 flex">
          <div className="hover:text-blue-700 hover:underline">Advertising</div>
          <div className="hover:text-blue-700 hover:underline">
            Bussiness Services
          </div>
        </div>

        <div className="justify-center mt-2 text-xs text-gray-600 space-x-4 flex">
          <div className="hover:text-blue-700 hover:underline">
            Get the LinkedIn app
          </div>
          <div className="hover:text-blue-700 hover:underline">More</div>
        </div>

        <div className="justify-center text-sm space-x-1 flex">
          <div>
            <img className="h-16" src={LinkedInNameLogo} />
          </div>
          <div className="mt-5">LinkedIn Corporation © 2024</div>
        </div>
      </div>
    </div>
  );
}

export default MassagePromotionCard;
