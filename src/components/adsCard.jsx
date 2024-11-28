import React from "react";
import LinkedInNameLogo from "../assets/linkedinname.svg";

function AdsCard() {
    return (
        <div>
            <img
                className="rounded-lg border shadow-lg ml-48 mt-4"
                src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            ></img>
            <div className="ml-60 mt-4 text-xs text-gray-600 space-x-4 flex">
                <div>About</div>
                <div>Accessibility</div>
                <div>Help Center</div>
            </div>

            <div className="ml-56 mt-2 text-xs text-gray-600 space-x-4 flex">
                <div>Privacy & Terms</div>
                <div>Ad Choices</div>
                <div>Advertising</div>
            </div>

            <div className="ml-52 mt-2 text-xs text-gray-600 space-x-4 flex">
                <div>Bussiness Services</div>
                <div>Get the LinkedIn app</div>
                <div>More</div>
            </div>

            <div className="ml-56 text-xs space-x-2 flex">
                <div>
                    <img className="h-16" src={LinkedInNameLogo} />
                </div>
                <div className="mt-6">LinkedIn Corporation © 2024</div>
            </div>
        </div>
    );
}

export default AdsCard;
