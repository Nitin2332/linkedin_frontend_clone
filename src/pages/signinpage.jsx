import Google from "../assets/GoogleLogo.svg";
import LinkedinName from "../assets/LinkedinNameLogo.svg";
import Apple from "../assets/AppleLogo.svg";
import LinkedinName2 from "../assets/LinkedinNameLogo2.svg";

function SignInPage() {
  return (
    <>
      <div>
        <div className="grid grid-cols-3">
          <div className="ml-12 mt-8">
            <img src={LinkedinName} />
          </div>

          <div className="h-auto w-auto mt-16 ml-16 rounded-lg shadow-2xl mr-20">
            <div className="text-3xl ml-5 py-3 mt-3 font-semibold">Sign in</div>

            <div>
              <button className="flex w-80 h-11 ml-6 mt-4 border py-2 shadow-inner rounded-full border-gray-500 font-medium text-gray-700 hover:bg-gray-100">
                <img className="h-5 w-5 ml-14 mt-0.5 mr-2" src={Google} />
                Countinue with Google
              </button>

              <button className="flex w-80 h-11 ml-6 mt-4 px-2 border py-2 shadow-inner rounded-full border-gray-500 font-medium text-gray-700 hover:bg-gray-100">
                <img className="h-5 w-5 ml-16 mt-0.5 mr-2" src={Apple} />
                Sign in with Apple
              </button>

              <hr className="h-px ml-2 mr-2 my-8 bg-gray-400 border-0"></hr>

              <input
                className="w-80 pl-3 ml-6 border py-3 text-lg rounded-lg border-black placeholder:text-gray-600"
                placeholder="Email or phone"
              ></input>
            </div>
            <div>
              <input
                className="w-80 pl-3 ml-6 mt-6 border py-3 text-lg rounded-lg border-black placeholder:text-gray-600"
                placeholder="Password"
              ></input>
            </div>
            <div
              className="ml-6 mt-3 text-blue-600 font-semibold hover:underline
          "
            >
              Forgot password?
            </div>

            <div className="flex ml-6 mt-2">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox h-5 w-5 mt-1"
              />
              <div className="ml-1 text-sm mt-1">Keep me logged in</div>
            </div>
            <button className="w-80 ml-6 mt-6 py-3 font-semibold text-white mb-6 rounded-full bg-blue-600 hover:bg-blue-800">
              Sign in
            </button>
          </div>
        </div>
        <div className="flex ml-64 px-96 mt-8 ">
          <div className="ml-5">New to LinkedIn?</div>
          <button className="font-semibold text-blue-600 ml-2 hover:underline">
            Join now
          </button>
        </div>
        <div className="flex px-80 ml-5">
          <img className="h-14 fill-current" src={LinkedinName2} />
          <div className="mt-5 text-xs ml-2">© 2024</div>
          <div className="flex text-xs space-x-4 ml-4 text-gray-600 font-medium">
            <button className="hover:underline">User Agreement</button>
            <button className="hover:underline">Privacy Policy</button>
            <button className="hover:underline">Community Guidlines</button>
            <button className="hover:underline">Cookie Policy</button>
            <button className="hover:underline">Copyright Policy</button>
            <button className="hover:underline">Send Feedback</button>
          </div>
          <div className="mt-5 text-xs ml-4 text-gray-600 font-medium hover:text-blue-600">
            Language ▼
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
