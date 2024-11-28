import google from "../assets/googleLogo.svg";
import link from "../assets/linkedin.svg";
import apple from "../assets/appleLogo.svg";
import Linkedinname from "../assets/linkedinname.svg";

function SignInPage() {
  return (
    <>
    <div>
      <div className="grid grid-cols-3">
        <div className="ml-12 mt-8">
          <img src={link} />
        </div>

        <div className="h-auto w-auto mt-16 ml-16 rounded-lg shadow-lg border mr-20">
          <div className="text-3xl ml-5 py-3 mt-3 font-semibold">Sign in</div>

          <div>
            <button className="flex w-80 h-11 ml-6 mt-4 border-2 py-2 shadow-inner rounded-full border-gray-500 font-medium text-gray-700">
              <img className="h-5 w-5 ml-14 mt-0.5 mr-2" src={google} />
              Countinue with Google
            </button>

            <button className="flex w-80 h-11 ml-6 mt-4 px-2 border-2 py-2 shadow-inner rounded-full border-gray-500 font-medium text-gray-700">
              <img className="h-5 w-5 ml-16 mt-0.5 mr-2" src={apple} />
              Sign in with Apple
            </button>

            <hr className="h-px ml-2 mr-2 my-8 bg-gray-400 border-0"></hr>

            <input
              className="w-80 pl-3 ml-6  border-2 py-3 text-lg rounded-lg border-gray-500"
              placeholder="Email or phone"
            ></input>
          </div>
          <div>
            <input
              className="w-80 pl-3 ml-6 mt-6 border-2 py-3 text-lg rounded-lg border-gray-500"
              placeholder="Password"
            ></input>
          </div>
          <div className="ml-6 mt-3 text-blue-600 font-semibold hover:underline
          ">
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
          <button className="w-80 ml-6 mt-6 py-3 font-semibold text-white mb-6 rounded-full bg-blue-600">
            Sign in
          </button>
        </div>
      </div>
      <div className="flex ml-64 px-96 mt-8 ">
        <div className="ml-5">New to LinkedIn?</div>
        <button className="font-semibold text-blue-600 ml-2">Join now</button>
        </div>
        <div className="flex px-80 ml-5">
          <img className="h-14" src={Linkedinname} />
          <div className="mt-5 text-xs ml-2">© 2024</div>
          <div className="mt-5 text-xs ml-4 text-gray-600 font-medium">User Agreement</div>
          <div className="mt-5 text-xs ml-4 text-gray-600 font-medium">Privacy Policy</div>
          <div className="mt-5 text-xs ml-4 text-gray-600 font-medium">Community Guidlines</div>
          <div className="mt-5 text-xs ml-4 text-gray-600 font-medium">Cookie Policy</div>
          <div className="mt-5 text-xs ml-4 text-gray-600 font-medium">Copyright Policy</div>
          <div className="mt-5 text-xs ml-4 text-gray-600 font-medium">Send Feedback</div>
          <div className="mt-5 text-xs ml-4 text-gray-600 font-medium">Language ▼</div>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
