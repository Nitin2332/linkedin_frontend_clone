import writingLogo from "../assets/writing logo2.svg";

function MassageCard() {
  return (
    <div>
      <div className="h-[665px] w-auto rounded-t-xl border shadow-sm ml-48 mt-6 bg-white">
        <div className="flex">
          <div className="font-semibold mt-3 ml-4">Messaging</div>
          <input
            className="bg-blue-50 rounded-md font-thin text-sm pl-5 my-2 py-1 ml-4 border-2 border-transparent hover:border-black pr-8"
            placeholder="Search massage"
            type="text"
          />
          <div className="font-extrabold ml-96 mt-2">. . .</div>
          <div className="px-5 mt-2.5">
            <img src={writingLogo} />
          </div>
        </div>
        <hr className="bg-gray-300"></hr>
        <div className="flex">
          <button className="bg-green-800 rounded-full text-white font-semibold px-4 py-0.5 ml-4 my-1.5 hover:bg-green-900">
            Focused ▼
          </button>
          <button className="border-2 border-gray-300 text-gray-600 font-semibold rounded-full px-3 py-0.5 ml-4 my-1.5 hover:bg-gray-100 hover:border-gray-500">
            Unread
          </button>
          <button className="border-2 border-gray-300 text-gray-600 font-semibold rounded-full px-3 py-0.5 ml-1 my-1.5 hover:bg-gray-100 hover:border-gray-500 ">
            My Connections
          </button>
          <button className="border-2 border-gray-300 text-gray-600 font-semibold rounded-full px-3 py-0.5 ml-1 my-1.5 hover:bg-gray-100 hover:border-gray-500 ">
            InMail
          </button>
          <button className="border-2 border-gray-300 text-gray-600 font-semibold rounded-full px-3 py-0.5 ml-1 my-1.5 hover:bg-gray-100 hover:border-gray-500 ">
            Starred
          </button>
        </div>
        <hr className="bg-gray-300"></hr>
        <div className="flex ">
          <div className="h-[570px] flex-nowrap overflow-y-auto">
            <div className=" hover:bg-gray-200 py-5 pl-5 pr-44">
              <div>Person1</div>
              <div className="text-sm text-gray-500">Recent Massage</div>
            </div>
            <div className=" hover:bg-gray-200 py-5 pl-5 pr-44">
              <div>Person2</div>
              <div className="text-sm text-gray-500">Recent Massage</div>
            </div>
            <div className=" hover:bg-gray-200 py-5 pl-5 pr-44">
              <div>Person3</div>
              <div className="text-sm text-gray-500">Recent Massage</div>
            </div>
            <div className=" hover:bg-gray-200 py-5 pl-5 pr-44">
              <div>Person4</div>
              <div className="text-sm text-gray-500">Recent Massage</div>
            </div>
            <div className=" hover:bg-gray-200 py-5 pl-5 pr-44">
              <div>Person4</div>
              <div className="text-sm text-gray-500">Recent Massage</div>
            </div>
            <div className=" hover:bg-gray-200 py-5 pl-5 pr-44">
              <div>Person5</div>
              <div className="text-sm text-gray-500">Recent Massage</div>
            </div>
            <div className=" hover:bg-gray-200 py-5 pl-5 pr-44">
              <div>Person6</div>
              <div className="text-sm text-gray-500">Recent Massage</div>
            </div>
            <div className=" hover:bg-gray-200 py-5 pl-5 pr-44">
              <div>Person7</div>
              <div className="text-sm text-gray-500">Recent Massage</div>
            </div>
            <div className=" hover:bg-gray-200 py-5 pl-5 pr-44">
              <div>Person8</div>
              <div className="text-sm text-gray-500">Recent Massage</div>
            </div>
            <div className=" hover:bg-gray-200 py-5 pl-5 pr-44">
              <div>Person9</div>
              <div className="text-sm text-gray-500">Recent Massage</div>
            </div>
            <div className=" hover:bg-gray-200 py-5 pl-5 pr-44">
              <div>Person10</div>
              <div className="text-sm text-gray-500">Recent Massage</div>
            </div>
          </div>
          <div>
            <div className="text-7xl font-serif">Loading...</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MassageCard;
