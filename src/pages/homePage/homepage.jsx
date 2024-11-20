import LeftCard from "../../components/home/left";
import MiddleCard from "../../components/home/middle";
import RightCard from "../../components/home/right";
import Topbar from "../../components/topbar";

export default function HomePage(){
    return <>
    <div>
        <Topbar/>
    </div>
    <div className="flex bg-[#f4f2ee]">
    <LeftCard />
    <MiddleCard />
    <RightCard />
    </div>
    </>
}