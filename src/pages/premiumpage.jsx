import LN from "../assets/L.svg";
import profile1 from "../assets/p1.png";
import profile2 from "../assets/p2.png";
import profile3 from "../assets/p3.jpg";
import Im1 from "../assets/imz1.svg";
import Im2 from "../assets/imz2.svg";
import Im3 from "../assets/imz3.svg";
import Lock from "../assets/lock.svg";


function Premium() {
  return (
    <>
      <div className="bg-[#f4f2ee]">
        <div className="bg-white h-44 border border-gray-300">
          <div className="flex ">
            <div className="px-48 pr-96 py-1">
              <img src={LN} />
            </div>
            <div className="font-semibold text-sm text-gray-500 px-48 ml-44 pl-96 py-4">
              Back to LinkedIn.com
            </div>
          </div>
          <hr className="bg-gray-300"></hr>
          <div className="text-center text-2xl font-semibold mt-7">
            Drive more leads and bigger deals with Sales Navigator
          </div>

          <div className="relative flex items-center justify-center mt-2">
            <img className="rounded-full h-7" src={profile1} />
            <img className="rounded-full h-7 -ml-3" src={profile2} />
            <img className="rounded-full h-7 -ml-3" src={profile3} />
            <div className="ml-2">
              Akshat and millions of other members use Premium
            </div>
          </div>
        </div>
        <div className="bg-white mt-6 mx-48 rounded-lg border border-gray-300">
          <div className="text-xl font-semibold text-center mt-5">
            Pay as little as ₹5,899.91* / month when billed annually
          </div>
          <div className="text-center mt-3 text-gray-500">Cancel anytime,for any reason</div>
          <div className="flex justify-center mt-4">
            <button className="bg-blue-500 text-white font-semibold text-xl rounded-full px-6 py-2 hover:bg-blue-700">
              Try Sales Navigator now
            </button>
            <button className="text-blue-500 border border-blue-500 font-semibold text-xl rounded-full px-10 ml-2 hover:bg-blue-50">
              Buy for team
            </button>
          </div>
          <div className=" mt-8 mb-5 flex justify-center" >
          <img className="h-4 mt-1" src={Lock} />
          <div className="font-semibold ml-1" >
          
            Secure checkout</div>
        </div>
        </div>
        <div className="bg-white mt-6 rounded-lg border  border-gray-300 mx-48 pt-7">
          <div className="text-6xl text-[#c37d16] font-extrabold text-center">4.3x</div>
          <div className="text-xl text-center mt-2">
            Grow your business with 4.3x more connections to decision makers
          </div>
          <hr className="bg-gray-300 my-6 mx-6"></hr> 
          <div className="text-2xl font-semibold text-center">Top Sales Navigator features</div>
          <div className="flex mt-6">
            <div>
              <img width={300} height={100} className="rounded-lg ml-11" src={Im1} />
              <div className="font-semibold ml-14 mt-4">Find the right leads and accounts with</div>
              <div className="font-semibold ml-32">advanced search</div>
              <div className="text-sm text-gray-600 ml-8">Uncover decision makers faster using 40+ advanced</div>
              <div className="text-sm text-gray-600 ml-11">search filters, streamlining your lead generation</div>
              <div className="text-sm text-gray-600 ml-40">process.</div>
            </div>
            <div>
              <img width={300} height={100} className="rounded-lg ml-14" src={Im2} />
              <div className="font-semibold ml-16 mt-4">Discover target accounts faster with</div>
              <div className="font-semibold ml-28">Relationship Explorer</div>
              <div className="text-sm text-gray-600 ml-10">Uncover the right path in and discover hidden allies to</div>
              <div className="text-sm text-gray-600 ml-20">save time prospecting target accounts</div>
            </div>
            <div>
              <img width={300} height={100} className="rounded-lg ml-14" src={Im3} />
              <div className="font-semibold ml-32 mt-4">50 InMails per month</div>
              <div className="text-sm text-gray-600 ml-10">Directly massage members outside of your network. It's</div>
              <div className="text-sm text-gray-600 ml-12">4.6x more effective in hearing back than cold email.</div>
            </div>
          </div>
          <div className="text-center my-7">
            <button className="text-blue-700 font-semibold">Show more features ▼</button>
          </div>
          <div className="text-center my-8 ">
            <button className="text-blue-700 font-semibold">
              Frequently asked questions ▼
            </button>
          </div>
        </div>
        <div className="mt-5 bg-white border border-gray-300 mx-48 rounded-lg">
          <div className="text-center pt-7" >
            <button className="text-blue-700 font-semibold">
              Compare Sales Navigator plans
            </button>
          </div>
          <div className="text-center my-7">
            <button className="text-blue-700 font-semibold">Explore all Premium plans</button>
          </div>
        </div>
        <div className="text-xs text-gray-700 mx-48 pt-7 pb-14">
          *Includes tax based on your biling country. You can update your
          information on the next page.
        </div>
      </div>
    </>
  );
}

export default Premium;
