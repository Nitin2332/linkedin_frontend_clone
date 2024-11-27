import React from "react";
import LinkedInNameLogo from "../assets/home_images/linkedinname.svg";

function PromotionsCard() {
    return (
        <div>
            <img
                className="rounded-lg border shadow-lg ml-6 mt-1.5"
                src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            ></img>
            <div className="ml-20 mt-4 text-xs text-gray-600 space-x-4 flex ">
                <div className="hover:text-blue-700 hover:underline">About</div>
                <div className="hover:text-blue-700 hover:underline">Accessibility</div>
                <div className="hover:text-blue-700 hover:underline">Help Center</div>
            </div>

            <div className="ml-24 mt-2 text-xs text-gray-600 space-x-4 flex">
                <div className="hover:text-blue-700 hover:underline">Privacy & Terms</div>
                <div className="hover:text-blue-700 hover:underline">Ad Choices</div>
            </div>

            <div className="ml-20 mt-2 text-xs text-gray-600 space-x-4 flex">
                <div className="hover:text-blue-700 hover:underline">Advertising</div>
                <div className="hover:text-blue-700 hover:underline">Bussiness Services</div>
            </div>

            <div className="ml-24 mt-2 text-xs text-gray-600 space-x-4 flex">
                <div className="hover:text-blue-700 hover:underline">Get the LinkedIn app</div>
                <div className="hover:text-blue-700 hover:underline">More</div>
            </div>

            <div className="ml-16 text-sm space-x-1 flex">
                <div>
                    <img className="h-16" src={LinkedInNameLogo} />
                </div>
                <div className="mt-5">LinkedIn Corporation © 2024</div>
            </div>
        </div>
    );
}

export default PromotionsCard;
