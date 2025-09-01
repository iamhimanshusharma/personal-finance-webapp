import { useState } from "react";
import { SideBarContext } from "./SideBarContext.js";

export default function SideBarProvider({ children }) {

    const [sideBarShow, setSideBarShow] = useState(false);
    const [currUserData, setCurrUserData] = useState({
        userid: "",
        fullname: "",
        email: "",
        password: "",
        cards: []
    })
    const [allCards, setAllCards] = useState([{
        name: "",
        cardnumber: ""
    }])

    return (
        <SideBarContext.Provider value={{ sideBarShow, setSideBarShow, currUserData, setCurrUserData, allCards, setAllCards }}>
            {children}
        </SideBarContext.Provider>
    );
}