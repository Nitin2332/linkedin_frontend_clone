import React from "react";
import Main from "../assets/main.png";
import Google from "../assets/google.svg";
import Recruiter from "../assets/image.png";
import photo1 from "../assets/img1.svg";
import photo2 from "../assets/img2.svg";
import photo3 from "../assets/img3.jpg";
import photo4 from "../assets/img4.png";
import lnkdn from "../assets/linkedinname.svg";
import LinkedinName2 from "../assets/LinkedinNameLogo2.svg";


function MainCard() {
  return (
    <div>
      <div className="flex mt-16">
        <div className="ml-48 text-gray-600">
          <div className="py-2 text-5xl">Welcome to your</div>
          <div className=" text-5xl">professional community</div>
          <button className="flex rounded-full bg-blue-600 hover:bg-blue-5 00 mt-7 h-10 w-3/4 text-white">
            <img className="h-10 ml-24" src={Google} />
            <div className="mt-2 ml-2 font-semibold text-sm">
              Countinue with Google
            </div>
          </button>
          <div>
            <button className="border border-black rounded-full mt-3 h-10 w-3/4 font-semibold text-gray-800 hover:bg-gray-200">
              Sign in with email
            </button>
          </div>
          <div className="mt-5 text-xs ml-7">
            By clicking Countinue to join or sign in ,you agre to Linkedin's
            User
          </div>
          <div className="text-xs ml-20 mt-1">
            Agreement,Privacy Policy, and Cookie Policy
          </div>
          <div className="flex  mt-7">
            <div className="ml-28">New to LinkedIn?</div>

            <button className="ml-1 font-semibold text-blue-700 hover:underline">
              Join now
            </button>
          </div>
        </div>
        <div>
          <img className="ml-28" src={Main} />
        </div>
      </div>
      <div className="flex bg-gray-200 py-16 pl-52">
        <div>
          <div className="text-black text-3xl">
            {" "}
            Explore collaborative aticles
          </div>
          <div className="text-black text-xl mt-3">
            We're unlocking community knowledge in a new
          </div>
          <div className="text-black text-xl">
            way. Experts add insights directly into each{" "}
          </div>
          <div className="text-black text-xl">
            article, started with the help of AI.
          </div>
        </div>
        <div className="ml-16 font-semibold">
          <div className="flex space-x-2">
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-300">
              Marketing
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-300">
              Public Administration
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-300">
              Healthcare
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-300">
              Engineering
            </button>
          </div>
          <div className="flex space-x-2 my-2">
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-300">
              IT Services
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-300">
              Sustainability
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-300">
              Bussiness Administration
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-300">
              Telecommunications
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-300">
              HR Management
            </button>
            <button className="border border-blue-600 text-blue-700 rounded-full px-6 py-3 hover:bg-blue-100">
              Show all
            </button>
          </div>
        </div>
      </div>
      <div className="flex py-16 pl-52">
        <div>
          <div className="text-black text-3xl"> Find the right job or</div>
          <div className="text-black text-3xl">internship for you</div>
        </div>
        <div className="ml-56 font-semibold">
          <div className="flex space-x-2">
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Engineering
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Bussiness Developement
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Finance
            </button>
          </div>
          <div className="flex space-x-2 my-2">
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Administrative Assistant
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Retail Associate
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Customer Service
            </button>
          </div>
          <div className="flex space-x-2 my-2">
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Operations
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Information Technology
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Marketing
            </button>
          </div>
          <div>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Human Resources
            </button>
          </div>
          <div>
            <button className="border border-black rounded-full px-5 mt-4 py-2 hover:bg-gray-100 text-sm">
              Show more ▼
            </button>
          </div>
        </div>
      </div>
      <div className="py-16 bg-gray-200 text-center">
        <div className="text-red-600 text-3xl">
          Post your job for millions of people to see
        </div>
        <div>
          <button className=" mt-8 border border-blue-600 text-blue-700 rounded-full px-6 py-3 hover:bg-blue-100 font-semibold">
            Post a job
          </button>
        </div>
      </div>
      <div className="flex py-16 pl-52">
        <div>
          <div className="text-black text-3xl"> Discover the best software</div>
          <div className="text-black text-3xl">tools</div>
          <div className="text-black text-xl mt-3">
            Connect with buyers who have first-hand
          </div>
          <div className="text-black text-xl">
            experience to find the best products for you.
          </div>
        </div>
        <div className="ml-24 font-semibold">
          <div className="flex space-x-2">
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              E-Commerce Platforms
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              CRM Software
            </button>
          </div>
          <div className="flex space-x-2 my-2">
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Human Resources Management Systems
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Recruiting Software
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Sales Intelligence Software
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Project Management Software
            </button>
          </div>
          <div className="flex space-x-2 my-2">
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Help Desk Software
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Social Networking Software
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Desktop Publishing Software
            </button>
            <button className="border border-blue-600 text-blue-700 rounded-full px-6 py-3 hover:bg-blue-100">
              Show all
            </button>
          </div>
        </div>
      </div>
      <div className="flex py-16 pl-52">
        <div>
          <div className="text-black text-3xl"> Keep your mind sharp with</div>
          <div className="text-black text-3xl">games</div>
          <div className="text-black text-xl mt-3">
            Take a break and reconnect with your network
          </div>
          <div className="text-black text-xl">through quick daily games.</div>
        </div>
        <div className="ml-20 font-semibold">
          <div className="flex space-x-2">
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Pinpoint
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Queens
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Crossclimb
            </button>
            <button className="border border-black rounded-full px-6 py-3 hover:bg-gray-100">
              Tango
            </button>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-200 py-16 pl-52">
        <div>
          <div className="text-red-600 text-3xl">
            {" "}
            Let the right people know you’re open
          </div>
          <div className="text-red-600 text-3xl">to work</div>
          <div className="text-black text-xl mt-3">
            With the Open To Work feature, you can privately tell recruiters
          </div>
          <div className="text-black text-xl">
            or publicly share with the LinkedIn community that you are
          </div>
          <div className="text-black text-xl">
            looking for new job opportunities.
          </div>
        </div>
        <div className="ml-16">
          <img height={450} width={450} src={Recruiter} />
        </div>
      </div>
      <div className="flex py-40">
        <div className="pl-52">
          <img src={photo1} />
          <div className="text-3xl mt-4">Connect with people who can</div>
          <div className="text-3xl">help</div>
          <button className="border border-gray-800 text-gray-800 font-semibold rounded-full px-6 py-3 mt-7 hover:bg-gray-100">
            Find people you know
          </button>
        </div>
        <div className="pl-44">
          <img src={photo2} />
          <div className="text-3xl mt-4">Learn the skills you need to</div>
          <div className="text-3xl">Succeed</div>
          <button className="border  rounded-lg text-xl px-4 py-4 mt-7 hover:bg-gray-100">
            Choose a topic to learn about ▼
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="pl-48 pr-32 mr-28 my-20 py-40  bg-gray-200">
          <div className="text-3xl text-red-600 ml-3">Who is LinkedIn for?</div>
          <div className="text-xl mt-2 ml-3">
            Anyone looking to navigate their professional life.
          </div>
          <div>
            <button className="bg-gray-300 text-xl my-2 py-3 px-3 ml-3 mt-8 hover:bg-gray-400">
              Find a coworker or classmate ˃
            </button>
          </div>
          <div>
            <button className="bg-gray-300 text-xl my-2 py-3 px-3 ml-3 hover:bg-gray-400">
              Find a new job ˃
            </button>
          </div>
          <div>
            <button className="bg-gray-300 text-xl my-2 py-3 px-3 ml-3 hover:bg-gray-400">
              Find a course or training ˃
            </button>
          </div>
        </div>
        <div className="h-[840px] w-[665px]">
          <img
            className="object-cover object-left w-full h-full"
            src={photo3}
          />
        </div>
      </div>
      <div className="flex mt-16 relative">
        <div className="absolute">
          <iframe
            className="mt-40 ml-48 w-[528px] h-[378px] rounded-md"
            src="https://www.youtube-nocookie.com/embed/IlYUUN8rL_Y?rel=0"
          ></iframe>
        </div>

        <div className="bg-blue-50 py-64 pl-56 pr-[325px] ml-[540px] rounded-md">
          <div className="text-3xl">In it to chase my dream</div>
          <div className="text-xl mt-4">
            Check out Gayatri's story of finding a new job on
          </div>
          <div className="text-xl mt-1">LinkedIn</div>
        </div>
      </div>
      <div className="relative mt-24">
        <div className="absolute  ml-48 mt-7">
          <div className="text-5xl">
            Join your colleagues, classmate, and friends on
          </div>
          <div className="mt-3 text-5xl">LinkedIn</div>
          <button className="bg-blue-700 py-3 px-6 mt-6 text-white font-semibold rounded-full hover:bg-blue-900">
            Get started
          </button>
        </div>
        <img src={photo4} />
      </div>
      <div className="flex bg-gray-200 space-x-24 font-semibold py-6">
        <img className="h-12 ml-48" src={lnkdn} />
        <div className="pl-24">
          <div>General</div>
          <div className="text-sm text-gray-700 mt-3 space-y-1">
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Sign Up
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Help Center
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              About
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Press
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Blog
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Careers
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Developers
            </div>
          </div>
        </div>
        <div>
          <div>Browse LinkedIn</div>
          <div className="text-sm text-gray-700 mt-3 space-y-1">
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Learning
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Jobs
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Games
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Salary
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Mobile
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Services
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Products
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Top Companies Hub
            </div>
          </div>
        </div>
        <div>
          <div>Bussiness Solutions</div>
          <div className="text-sm text-gray-700 mt-3 space-y-1">
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Talent
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Marketing
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Sales
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Learning
            </div>
          </div>
        </div>
        <div>
          <div>Directories</div>
          <div className="text-sm text-gray-700 mt-3 space-y-1">
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Members
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Jobs
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Companies
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Featured
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Learning
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Posts
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Articles
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              School
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              News
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              News Letters
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Services
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Products
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              Advice
            </div>
            <div className="hover:text-blue-700 hover:underline cursor-pointer">
              People Search
            </div>
          </div>
        </div>
      </div>
      <div className="flex ml-52">
          <img className="h-14 fill-current" src={LinkedinName2} />
          <div className="mt-5 text-xs ml-2">© 2024</div>
          <div className="flex text-xs space-x-4 ml-4 text-gray-600 font-medium">
            <button className="hover:underline hover:text-blue-900">About</button>
            <button className="hover:underline hover:text-blue-900">Accessibility</button>
            <button className="hover:underline hover:text-blue-900">User Agreement</button>
            <button className="hover:underline hover:text-blue-900">Privacy Policy</button>
            <button className="hover:underline hover:text-blue-900">Cookie Policy</button>
            <button className="hover:underline hover:text-blue-900">Copyright Policy</button>
            <button className="hover:underline hover:text-blue-900">Brand Policy</button>
            <button className="hover:underline hover:text-blue-900">Guest Controls</button>
            <button className="hover:underline hover:text-blue-900">Community Guidlines</button>
            <button className="">Language ▼</button>
          </div>
          
        </div>
    </div>
  );
}

export default MainCard;
