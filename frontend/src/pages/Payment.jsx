import React, { useContext, useEffect, useState } from 'react'
import ContentsHeader from '../contents/ContentsHeader'
import axios from 'axios';
import { USER_URI } from '../constants';
import OutlinedIconTextButton from '../utils/OutlinedIconTextButton';
import { Toaster, toast } from "sonner";
import Transactions from './components/Transactions';
import { UserContext } from '../contexts/UserContext';

const Payment = () => {
    const { currUserData, allCards } = useContext(UserContext)
    const [selectCard, setSelectCard] = useState(null);
    const [paymentDetails, setPaymentDetails] = useState({
        sendercardnumber: "",
        receivercardnumber: "",
        amount: 0
    })
    let cards = [];
    cards = currUserData.cards.map(item => item.cardnumber)

    function onChangeHandler(e) {
        console.log(paymentDetails);
        setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
    }

    function cardChangeHandler(e) {
        console.log(e.target.value);
        setSelectCard(e.target.value);
    }

    async function paymentHandler(e) {
        e.preventDefault();
        try {
            const response = await axios.post(`${USER_URI}/payment/pay`, paymentDetails, { headers: { "Content-Type": "application/json" }, withCredentials: true });
            if (!response) {
                toast("Payment Failed");
            }
            toast("Payment done");
            getAllPayments();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <ContentsHeader Title={"Payment"} />
            <Toaster />
            <div>
                <div className='flex items-center justify-center'>
                    <div className='my-4 mx-2'>
                        <label className="text-sm font-medium">Sender</label>
                        <select
                            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
                            defaultValue="" onChange={onChangeHandler} name="sendercardnumber">
                            {
                                currUserData.cards.length > 0 ? (
                                    <>
                                        <option value="" disabled>
                                            Sender
                                        </option>

                                        {currUserData.cards.map((item, key) => (
                                            <option key={key} value={item.cardnumber}>{item.name} ({item.cardnumber})</option>
                                        ))}
                                    </>
                                ) : (<option value="" disabled>
                                    No cards found!
                                </option>)
                            }
                        </select>
                    </div>
                    <div className='my-4 mx-2 z-49'>
                        <label className="text-sm font-medium">Receiver</label>
                        <select
                            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
                            defaultValue="" onChange={onChangeHandler} name='receivercardnumber'>
                            <option value="" disabled>
                                Receiver
                            </option>
                            {
                                allCards.filter(obj => !cards.includes(obj.cardnumber)).map((item, key) => (
                                    <option key={key} value={item.cardnumber}>{item.name} ({item.cardnumber})</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='my-4 mx-2'>
                        <label className="text-sm font-medium">Amount</label>
                        <input
                            type="text"
                            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
                            placeholder="Amount"
                            name="amount"
                            onChange={onChangeHandler}
                        />
                    </div>
                </div>
                <OutlinedIconTextButton IconSource={"send.png"} ButtonText={"Send"} OnClickHandler={paymentHandler} />
            </div>
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
            <div className='ring-1 m-2 ring-gray-200 rounded-md overflow-auto h-60 custom-scrollbar'>
                <div className='pl-2 py-3'>
                    <Transactions SelectCard={selectCard} />
                </div>
            </div>

        </>
    )
}

export default Payment