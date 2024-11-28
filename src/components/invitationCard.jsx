import React from "react";
import Person1 from "../assets/person1.jpg";
import Person2 from "../assets/person2.jpg";
import Person3 from "../assets/person3.jpg";

function InvitationCard() {
    return (
        <div className="h-auto w-auto rounded-lg border shadow-sm ml-5 py-3 mt-4 bg-white">
            <div className="flex pr-6 px-3 pb-3">
                <div className="pr-56">Invitations (15)</div>
                <div className="ml-96 font-semibold">Show all</div>
            </div>
            <hr className="h-px bg-gray-200 border-0"></hr>

            <div className="flex">
                <img
                    height={80}
                    width={80}
                    className="ml-4 mt-3 rounded-full"
                    src={Person1}
                ></img>
                <div className="mt-4 ml-3">
                    <div className="font-semibold">Harkirat Singh</div>
                    <div className="text-sm text-gray-600">Working with WebRTC</div>
                    <div className="mt-1 text-xs text-gray-600">
                        500+ mutual connections
                    </div>
                </div>
                <div className="ml-96 mt-10 font-semibold px-3">Ignore</div>
                <button className="border-2 mt-9 ml-2 pb-1 mb-7 px-4 font-semibold text-blue-800 border-blue-800 rounded-full hover:bg-blue-100">
                    Accept
                </button>
            </div>
            <hr className="h-px bg-gray-200 border-0 mt-3"></hr>

            <div className="flex">
                <img
                    height={80}
                    width={80}
                    className="ml-4 mt-3 rounded-full"
                    src={Person2}
                ></img>
                <div className="mt-4 ml-3">
                    <div className="font-semibold">Aryan Singh</div>
                    <div className="text-sm text-gray-600 mr-1">
                        Google | Arrow Electronics | UMass Alum | 400k+ on IG |...
                    </div>
                    <div className="mt-1 text-xs text-gray-600">
                        Ritik Rajpoot and 50 other mutual connections
                    </div>
                </div>
                <div className="ml-40 mt-10 font-semibold px-3">Ignore</div>
                <button className="border-2 mt-9 ml-2 pb-1 mb-7 px-4 font-semibold text-blue-800 border-blue-800 rounded-full hover:bg-blue-100">
                    Accept
                </button>
            </div>
            <hr className="h-px bg-gray-200 border-0 mt-3"></hr>

            <div className="flex">
                <img
                    height={80}
                    width={80}
                    className="ml-4 mt-3 rounded-full"
                    src={Person3}
                ></img>
                <div className="mt-4 ml-3">
                    <div className="font-semibold">Neeraj Walia</div>
                    <div className="text-sm text-gray-600 mr-1">Never stop</div>
                    <div className="mt-1 text-xs text-gray-600">
                        500+ mutual connections
                    </div>
                </div>
                <div className="ml-96 mt-10 font-semibold px-3">Ignore</div>
                <button className="border-2 mt-9 ml-2 pb-1 mb-7 px-4 font-semibold text-blue-800 border-blue-800 rounded-full hover:bg-blue-100">
                    Accept
                </button>
            </div>
        </div>
    );
}

export default InvitationCard;
