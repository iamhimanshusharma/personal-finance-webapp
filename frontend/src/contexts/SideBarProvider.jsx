import { useState } from "react";
import { SideBarContext } from "./SideBarContext.js";

export default function SideBarProvider({ children }) {

    const [sideBarShow, setSideBarShow] = useState(false);
    const [currUserData, setCurrUserData] = useState({
        fullname: "",
        email: "",
        password: "",
        cards: []
    })

    return (
        <SideBarContext.Provider value={{ sideBarShow, setSideBarShow, currUserData, setCurrUserData }}>
            {children}
        </SideBarContext.Provider>
    );
}