import OutlinedIconTextButton from "../utils/OutlinedIconTextButton"
import OutlinedIconButton from "../utils/OutlinedIconButton"
import UserProfile from "./UserProfile"
import { useContext, useEffect, useState } from "react";
import { SideBarContext } from "../contexts/SideBarContext.js";
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { USER_URI } from "../constants.js";

const ContentsHeader = ({ Title }) => {

    const navigate = useNavigate();
    const { sideBarShow, setSideBarShow, allCards, setAllCards, currUserData, setCurrUserData } = useContext(SideBarContext);

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const userCookie = Cookies.get("token");

        if (!userCookie) {
            navigate("/login");
        } else {
            try {
                const decoded = jwtDecode(userCookie);
                setUserId(decoded.userId);
                getCards();
                getData();
            } catch (err) {
                console.error("Invalid token:", err);
                navigate("/login"); // force login if token corrupted
            }
        }
    }, []);

    async function getCards() {
        try {
            const response = await axios.get(`${USER_URI}/card/cards`, { headers: { "Content-Type": "application/json" }, withCredentials: true });
            if (!response) {
                console.log("Something wrong in getting cards")
            }
            setAllCards(prev => ([...response.data.cards.map(p => ({
                name: p.name,
                cardnumber: p.cardnumber
            })
            )]));
        } catch (error) {
            console.log(error)
        }
    }


    async function getData() {
        try {
            const response = await axios.get(`${USER_URI}/getuser`, {
                headers: {
                    "Content-Type": "application/json"
                }, withCredentials: true
            });

            if (response) {
                const tempCard = [];
                setCurrUserData(prev => ({
                    ...prev,
                    userid: response.data.user._id,
                    fullname: response.data.user.fullname,
                    email: response.data.user.email,
                    cards: response.data.user.cards
                }));
            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <div className="p-2 flex items-center justify-between shadow py-3">
                <div className={`flex items-center justify-center`}>
                    <img onClick={() => setSideBarShow(!sideBarShow)} className={`w-8 h-8 ring-1 rounded-sm ring-gray-400 cursor-pointer max-sm:block ${!sideBarShow ? 'hidden' : ''}`} src="./src/images/button_icons/menu.png" alt="" />
                    <p className="text-xl font-bold px-3">{Title}</p>
                </div>
                <div>
                    <ul className="flex items-center justify-center space-x-2">
                        <li><OutlinedIconButton IconSource={"notification.png"} /></li>
                        <li><OutlinedIconButton IconSource={"app.png"} /></li>
                        <li><OutlinedIconTextButton IconSource={"share.png"} ButtonText={"Share"} /></li>
                        <li><UserProfile /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ContentsHeader