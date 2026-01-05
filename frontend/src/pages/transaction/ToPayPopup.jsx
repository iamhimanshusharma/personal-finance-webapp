import React, { useEffect, useState } from 'react'
import { toast, Toaster } from 'sonner';
import axios from 'axios';
import IconTextButton from '../../utils/IconTextButton';
import OutlinedIconTextButton from '../../utils/OutlinedIconTextButton';
import { USER_URI } from '../../constants';

const ToPayPopup = ({ Show, OnClose, currUserData, allCards }) => {
    const [closePopup, setClosePopup] = useState(Show);
    const [paymentDetails, setPaymentDetails] = useState({
        sendercardnumber: "",
        receivercardnumber: "",
        amount: 0
    })
    let cards = [];
    cards = currUserData.cards.map(item => item.cardnumber)

    useEffect(() => {
        setClosePopup(Show);
    }, [Show])

    function onChangeHandler(e) {
        console.log(paymentDetails);
        setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
    }

    async function paymentHandler(e) {
        e.preventDefault();
        try {
            const response = await axios.post(`${USER_URI}/payment/pay`, paymentDetails, { headers: { "Content-Type": "application/json" }, withCredentials: true });
            if (!response) {
                toast("Payment Failed");
            }
            toast("Payment done");
            setClosePopup(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Toaster />
            <div className={`text-lg ${closePopup ? 'block' : 'hidden'} `}>

                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-96">
                        <h2 className="text-xl font-semibold mb-4">Pay</h2>

                        <div>
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

                        <div>
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

                        <div>
                            <label className="text-sm font-medium">Amount</label>
                            <input
                                type="text"
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
                                placeholder="Amount"
                                name="amount"
                                onChange={onChangeHandler}
                            />
                        </div>

                        <div className="flex justify-end gap-2 mt-6">
                            <IconTextButton IconSource={"close.png"} OnClickHandler={OnClose} ButtonText={"Close"} />
                            <OutlinedIconTextButton IconSource={"send.png"} ButtonText={"Send"} OnClickHandler={paymentHandler} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ToPayPopup