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
    <div className="px-40 shadow-lg">
      <div className="flex p-2">
        <div className="flex w-1/3 pl-7">
          <img className="pt-1" src={LinkedInLogo}></img>
          <div className="flex bg-blue-50 rounded-sm pl-5 mt-2 mb-1.5 w-72">
            <img src={SearchLogo} />
            <input placeholder="Search" className="bg-transparent pl-2" />
          </div>
        </div>
        <div className="flex justify-between w-2/3 px-10">
          <div>
            <img className="ml-2" src={homeImage} />
            Home
          </div>
          <div>
            <img className="ml-8" src={myNetworkLogo} />
            My Network
          </div>
          <div>
            <img className="ml-1" src={jobsLogo} />
            Jobs
          </div>
          <div>
            <img className="ml-8" src={massageLogo} />
            Messageing
          </div>
          <div>
            <img className="ml-8" src={notificationLogo} />
            Notifications
          </div>
          <div>
            <img className="bg-orange-500 rounded-full" src={me} />
            Me
          </div>
          <div>
            <img className="ml-8" src={Bussiness} />
            For Bussiness
          </div>
          <div>
            <img className="ml-14 h-6" src={Premium} />
            Try Premium for ₹0
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Topbar;
