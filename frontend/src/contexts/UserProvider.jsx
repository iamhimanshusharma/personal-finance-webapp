import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function UserProvider({ children }) {

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
    const [loggedIn, setLoggedIn] = useState(false);

    const login = () => setLoggedIn(true);
    const logout = () => setLoggedIn(false);

    return (
        <UserContext.Provider value={{ sideBarShow, setSideBarShow, currUserData, setCurrUserData, allCards, setAllCards, loggedIn, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}