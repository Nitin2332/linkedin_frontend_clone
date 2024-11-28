import React from "react";
import ApplePoster from "../assets/home_images/apple.jpg";
import Like from "../assets/home_images/like.svg";
import Like2 from "../assets/home_images/like2.svg";
import Comment from "../assets/home_images/comment.svg";
import Repost from "../assets/home_images/repost.svg";
import Send from "../assets/home_images/send.svg";
import AppleLogo from "../assets/home_images/applelogo.svg";
import IITposter from "../assets/home_images/iit.jpg";
import MongoDBposter from "../assets/home_images/mongo.jpg";
import IITlogo from "../assets/home_images/iitlogo.webp";
import DBlogo from "../assets/home_images/MongoDBLogo.svg";
import Clapping from "../assets/home_images/clapping-hands.svg";
import Support from "../assets/home_images/charity.svg";
import Love from "../assets/home_images/love.svg";
import Idea from "../assets/home_images/light-bulb.svg";
import Funny from "../assets/home_images/lauging.svg";

function UpdateCard() {
  const cards = [
    {
      logo: AppleLogo,
      title: "Apple",
      subtitle: "Promoted",
      description:
        "Blazing-fast performance on the new MacBook Pro. Supercharged by M4",
      poster: ApplePoster,
      footerText: "Switch to Mac. power up.",
      buttonText: "Learn more",
    },
    {
      logo: IITlogo,
      title: "IIT Roorkee - Applied Finance, Credit & Crime Risk Management",
      subtitle: "Promoted",
      description: "A new era of excellence.",
      poster: IITposter,
      footerText:
        "IIT Roorkee - Applied Finance, Credit & Crime Risk Management Program",
      buttonText: "Apply",
    },
    {
      logo: DBlogo,
      title: "MongoDB",
      subtitle: "Promoted",
      description: "How to Get Started with MongoDB.",
      poster: MongoDBposter,
      footerText: "How to Get Started with MongoDB.",
      buttonText: "Learn more",
    },
  ];

  return (
    <div>
      <div className="flex">
        <hr className="h-px w-4/5 my-4 ml-6 border-1 border-gray-400"></hr>
        <div className="ml-2 mt-2 text-xs text-gray-700">Sort by: </div>
        <div className="mt-2 text-xs font-semibold ml-1">Top ▼</div>
      </div>

      {cards.map((card, index) => (
        <div
          key={index}
          className="h-max w-max rounded-lg border shadow-sm ml-6 bg-white"
        >
          <div className="flex">
            <div>
              <img className="ml-5 mt-4 h-9 w-9" src={card.logo} />
            </div>
            <div>
              <div className="ml-3 mt-4 font-semibold">{card.title}</div>
              <div className="ml-3 text-xs text-gray-500">{card.subtitle}</div>
            </div>
          </div>
          <div className="ml-4 mt-2 text-sm">{card.description}</div>
          <img className="mt-2" height={565} width={565} src={card.poster} />
          <div className="flex justify-between">
            <div className="my-2 ml-3 text-sm font-semibold">
              {card.footerText}
            </div>
            <button className="bg-transparent h-6 text-sm font-semibold text-blue-700 mt-2 ml-4 px-3 border border-blue-700 rounded-full mr-2">
              {card.buttonText}
            </button>
          </div>
          <hr className="h-px my-3 bg-gray-200 border-0"></hr>
          <div className="flex px-4 py-1 pb-4">
            <button className="flex pl-6 group relative">
              <img className="h-6" src={Like} alt="like" />
              <div className="ml-1.5 font-semibold text-sm">Like</div>
              <div className="absolute hidden -mt-16 text-black group-hover:flex space-x-1">
                <img className="h-12" src={Like2} alt="reaction like" />
                <img className="h-12" src={Clapping} alt="reaction clap" />
                <img className="h-12" src={Support} alt="reaction support" />
                <img className="h-12" src={Love} alt="reaction love" />
                <img className="h-12" src={Idea} alt="reaction idea" />
                <img className="h-12" src={Funny} alt="reaction funny" />
              </div>
            </button>
            <button className="flex pl-16">
              <img className="h-6" src={Comment} alt="comment" />
              <div className="ml-1.5 font-semibold text-sm">Comment</div>
            </button>
            <button className="flex pl-16">
              <img className="h-6" src={Repost} alt="repost" />
              <div className="ml-1.5 font-semibold text-sm">Repost</div>
            </button>
            <button className="flex pl-16">
              <img className="h-6" src={Send} alt="send" />
              <div className="ml-1.5 font-semibold text-sm">Send</div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpdateCard;
