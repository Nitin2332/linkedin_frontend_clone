import React from "react";
import LinkedInNameLogo from "../assets/home_images/linkedinname.svg";

function PromotionsCard() {
    return (
        <div>
            <img
                className="rounded-lg border shadow-lg ml-6 mt-1.5"
                src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            ></img>
            <div className="ml-20 mt-4 text-xs text-gray-600 space-x-4 flex">
                <div>About</div>
                <div>Accessibility</div>
                <div>Help Center</div>
            </div>

            <div className="ml-24 mt-2 text-xs text-gray-600 space-x-4 flex">
                <div>Privacy & Terms</div>
                <div>Ad Choices</div>
            </div>

            <div className="ml-20 mt-2 text-xs text-gray-600 space-x-4 flex">
                <div>Advertising</div>
                <div>Bussiness Services</div>
            </div>

            <div className="ml-24 mt-2 text-xs text-gray-600 space-x-4 flex">
                <div>Get the LinkedIn app</div>
                <div>More</div>
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
