import Left from "../components/jobs/left";
import Mid from "../components/jobs/mid";
import Right from "../components/jobs/right";
import Topbar from "../components/topbar";


export default function JobsPage(){
    return <>
    <div className="sticky top-0 bg-white">
        <Topbar/>
    </div>
    <div className="flex bg-[#f4f2ee]">
    <Left/>
    <Mid/>
    <Right/>
    
    </div>
    </>
}