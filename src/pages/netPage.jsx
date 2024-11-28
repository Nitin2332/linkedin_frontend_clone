import Left from "../components/network/left";
import Right from "../components/network/right";
import Topbar from "../components/topbar";

export default function NetPage(){
    return <>
    <div className="sticky top-0 bg-white">
        <Topbar/>
    </div>
    <div className="flex bg-[#f4f2ee]">
    < Left/>
    <Right/>
    </div>
    </>
}