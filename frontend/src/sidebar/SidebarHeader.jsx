import { useContext, useState } from "react";
import IconButton from "../utils/IconButton"
import { UserContext } from "../contexts/UserContext.js";

const SidebarHeader = () => {
    const { sideBarShow, setSideBarShow } = useContext(UserContext);

    return (
        <div className="flex items-center justify-between">
            <IconButton IconSource={"home.png"} />
            <button onClick={() => setSideBarShow(!sideBarShow)} ><img className="w-6 h-6 cursor-pointer" src="/images/button_icons/sidebar.png" alt="" /></button>
        </div>
    )
}

export default SidebarHeader