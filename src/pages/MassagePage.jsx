import Left from "../components/massage/left";
import Right from "../components/massage/right";
import Topbar from "../components/topbar";


export default function MassagePage(){
    return <>
    <div className="sticky top-0 bg-white">
        <Topbar/>
    </div>
    <div className="flex bg-[#f4f2ee]">
    <Left/>
    <Right/>
    </div>
    </>
}