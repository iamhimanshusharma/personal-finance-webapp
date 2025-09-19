import { useContext } from "react";
import Contents from "./contents/Contents"
import Sidebar from "./sidebar/Sidebar"
import { UserContext } from "./contexts/UserContext";

function Dashboard() {
    const { sideBarShow, setSideBarShow } = useContext(UserContext);
    return (
        <div>
            <div className="grid grid-cols-5 grid-flow-col h-screen bg-gray-200">
                <div className={`col-span-1 p-2 max-sm:hidden ${sideBarShow ? 'hidden' : ''}`}>
                    <Sidebar />
                </div>
                <div className={`m-1 bg-white rounded-lg shadow max-sm:col-span-5 ${sideBarShow ? 'col-span-5' : 'col-span-4'}`}>
                    <Contents />
                </div>
            </div>
        </div>
    )
}

export default Dashboard