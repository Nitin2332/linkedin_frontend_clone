import React from "react";
import Connection from "../assets/connections.svg";
import Contact from "../assets/contacts.svg";
import Follow from "../assets/followers.svg";
import Group from "../assets/groups.svg";
import Event from "../assets/events.svg";
import Page from "../assets/pages.svg";
import Newsletter from "../assets/newsletters.svg";

function ManageCard() {
    return (
        
            <div className="h-auto w-auto rounded-lg border shadow-sm ml-48 py-2 mt-5 bg-white">
                <div className=" ml-6 py-2 pb-4 font-semibold">Manage my network</div>
                <hr className="h-px bg-gray-200 border-0"></hr>
                <div className="flex hover:bg-gray-100">
                    <img className="ml-4" src={Connection} />
                    <div className="text-gray-700 ml-4 py-3 font-semibold ">
                        Connections
                    </div>
                    <div className="text-gray-700 mt-4 ml-28 text-sm">674</div>
                </div>
                <div className="flex hover:bg-gray-100">
                    <img className="ml-4" src={Contact} />
                    <div className="text-gray-700 ml-4 py-3 font-semibold">Contacts</div>
                </div>
                <div className="flex hover:bg-gray-100">
                    <img className="ml-4" src={Follow} />
                    <div className="text-gray-700 ml-4 py-3 font-semibold">
                        Following and followers
                    </div>
                </div>
                <div className="flex hover:bg-gray-100">
                    <img className="ml-4" src={Group} />
                    <div className="text-gray-700 ml-4 py-3 font-semibold ">Groups</div>
                    <div className="text-gray-700 mt-4 ml-40 text-sm">2</div>
                </div>
                <div className="flex hover:bg-gray-100">
                    <img className="ml-4" src={Event} />
                    <div className="text-gray-700 ml-4 py-3 font-semibold">Events</div>
                </div>
                <div className="flex hover:bg-gray-100">
                    <img className="ml-4" src={Page} />
                    <div className="text-gray-700 ml-4 py-3 font-semibold">Pages</div>
                    <div className="text-gray-700 mt-4 ml-40 px-1 text-sm">46</div>
                </div>
                <div className="flex hover:bg-gray-100">
                    <img className="ml-4" src={Newsletter} />
                    <div className="text-gray-700 ml-4 py-3 font-semibold">
                        Newsletters
                    </div>
                    <div className="text-gray-700 mt-4 ml-24  pl-6 text-sm">10</div>
                </div>
            </div>
        
    );
}

export default ManageCard;
