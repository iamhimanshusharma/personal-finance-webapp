import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast, Toaster } from 'sonner';
import IconTextButton from '../../utils/IconTextButton';

const AddCardPopup = ({ Show, OnClose }) => {

    const [closePopup, setClosePopup] = useState(Show);
    const [cardDetails, setCardDetails] = useState({
        name: "",
        cardnumber: "",
        type: "",
        expiry: "",
        cvv: ""
    })
    async function addCardOnChangeHandler(e) {
        setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        setClosePopup(Show);
    }, [Show])

    async function addCardHandler(e) {
        e.preventDefault();
        try {
            const response = axios.post("http://localhost:3000/api/v1/user/card/addcard", cardDetails, { headers: { "Content-Type": "application/json" }, withCredentials: true });
            if (response) {
                toast("Card Added")
            }
        } catch (error) {
            console.log(error)
        }
        console.log(cardDetails);
    }

    return (
        <>
            <Toaster />
            <div className={`text-lg ${closePopup ? 'block' : 'hidden'} `}>

                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-96">
                        <h2 className="text-xl font-semibold mb-4">Add Card</h2>

                        <div>
                            <label className="block text-sm font-medium">Card Holder</label>
                            <input
                                type="text"
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter name"
                                name="name"
                                onChange={addCardOnChangeHandler}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Card Number</label>
                            <input
                                type="text"
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
                                placeholder="1234 5678 9012 3456"
                                name="cardnumber"
                                onChange={addCardOnChangeHandler}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Card Type</label>
                            <select
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
                                defaultValue=""
                                onChange={addCardOnChangeHandler} name="type"
                            >
                                <option value="" disabled>
                                    Select type
                                </option>
                                <option value="debit">Debit</option>
                                <option value="credit">Credit</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Expiry Date</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
                                    placeholder="MM/YY"
                                    name="expiry"
                                    onChange={addCardOnChangeHandler}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">CVV</label>
                                <input
                                    type="password"
                                    className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
                                    placeholder="***"
                                    name="cvv"
                                    onChange={addCardOnChangeHandler}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 mt-6">
                            <IconTextButton IconSource={"close.png"} OnClickHandler={OnClose} ButtonText={"Close"} />
                            <IconTextButton IconSource={"plus.png"} OnClickHandler={addCardHandler} ButtonText={"Add"} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AddCardPopup