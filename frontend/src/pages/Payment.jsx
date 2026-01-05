import React, { useContext, useEffect, useState } from 'react'
import ContentsHeader from '../contents/ContentsHeader'
import axios from 'axios';
import { USER_URI } from '../constants';
import OutlinedIconTextButton from '../utils/OutlinedIconTextButton';
import { Toaster, toast } from "sonner";
import Transactions from './components/Transactions';
import { UserContext } from '../contexts/UserContext';
import SearchBar from './components/SearchBar';
import IconTextButtonActive from '../utils/IconTextButtonActive';
import IconTextButton from '../utils/IconTextButton';
import ToPayPopup from './transaction/ToPayPopup';

const Payment = () => {
    const { currUserData, allCards } = useContext(UserContext)
    const [selectCard, setSelectCard] = useState(null);
    const [toPayPopup, setToPayPopup] = useState(false);
    let cards = [];
    cards = currUserData.cards.map(item => item.cardnumber)

    function cardChangeHandler(e) {
        console.log(e.target.value);
        setSelectCard(e.target.value);
    }

    return (
        <>
            <ContentsHeader Title={"Payment"} />
            <Toaster />
            <div className='max-w-full m-2'>
                <div className='flex items-center justify-between'>
                    <SearchBar />
                    <IconTextButton IconSource={"add.png"} FilledIconSource={"home.png"} ButtonText={"Pay"} OnClickHandler={() => setToPayPopup(!toPayPopup)} ClassName={"w-100"} />
                </div>
                <ToPayPopup Show={toPayPopup} OnClose={() => setToPayPopup(false)} currUserData={currUserData} allCards={allCards} />

                <div className='my-4 mx-2 z-50'>
                    <label className="text-sm font-medium">Select Card</label>
                    <select
                        className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
                        defaultValue="" onChange={cardChangeHandler} name='selectcard'>
                        <option value="" disabled>
                            Select Card
                        </option>
                        {
                            currUserData.cards.map((item, key) => (
                                <option key={key} value={item.cardnumber}>{item.name} ({item.cardnumber})</option>
                            ))
                        }
                    </select>
                </div>
                <div className='ring-1 m-2 ring-gray-200 rounded-md overflow-auto h-80 custom-scrollbar'>
                    <div className='pl-2 py-3'>
                        <Transactions SelectCard={selectCard} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment