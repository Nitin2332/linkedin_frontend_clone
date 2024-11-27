import LinkedInLogo from "../assets/linkedin.svg";
import SearchLogo from "../assets/search.svg";
import homeImage from "../assets/navbar_images/home.svg";
import myNetworkLogo from "../assets/navbar_images/my network.svg";
import jobsLogo from "../assets/navbar_images/jobs.svg";
import massageLogo from "../assets/navbar_images/massaging.svg";
import notificationLogo from "../assets/navbar_images/notification.svg";
import me from "../assets/navbar_images/me.svg";
import Premium from "../assets/navbar_images/premium.png";
import Bussiness from "../assets/navbar_images/for bussiness.svg";

function Topbar() {
  return (
    <>
      <div className="px-40 border-b border-[#e8e8e8] ">
        <div className="flex p-1">
          <div className="flex w-1/3 pl-7">
            <img className="pt-1" src={LinkedInLogo}></img>
            <div className="flex bg-blue-50 rounded-sm pl-5 mt-2 mb-1.5 w-72">
              <img src={SearchLogo} />
              <input placeholder="Search" className="bg-transparent pl-2" />
            </div>
          </div>
          <div className="flex justify-between w-2/3 px-10">
            <button>
              <img className="ml-2" src={homeImage} />
              <div className="text-sm">Home</div>
            </button>
            
            <button>
              <img className="ml-8" src={myNetworkLogo} />
              <div className="text-sm">My Network</div>
              </button>
              <button>
              <img className="ml-1" src={jobsLogo} />
              <div className="text-sm">Jobs</div>
              </button>
            <button>
              <img className="ml-8" src={massageLogo} />
              <div className="text-sm">Messageing</div>
              </button>
            <button>
              <img className="ml-8" src={notificationLogo} />
              <div className="text-sm">Notifications</div>
              </button>
            <button>
              <img className="bg-orange-500 rounded-full" src={me} />
              <div className="text-sm">Me</div>
              </button>
            <button>
              <img className="ml-8" src={Bussiness} />
              <div className="text-sm">For Bussiness</div>
              </button>
            <button>
              <img className="ml-14 h-6" src={Premium} />
              <div className="text-sm">Try Premium for ₹0</div>
              </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
