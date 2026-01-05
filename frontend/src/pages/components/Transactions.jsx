import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { USER_URI } from '../../constants';
import { useContext } from 'react';

import { UserContext } from '../../contexts/UserContext';

const Transactions = ({ SelectCard, allDashPayments = [], setAllDashPayments = () => { } }) => { //Declare the type of props otherwise it throws error specially when function is given

    const { currUserData } = useContext(UserContext);
    const [allPayments, setAllPayments] = useState([{
        sendername: "",
        sendercardnumber: "",
        receivername: "",
        receivercardnumber: "",
        amount: 0,
        currentBalance: 0,
        createdAt: ""
    }])

    useEffect(() => {
        getAllPayments();
    }, [])

    async function getAllPayments() {
        try {
            const response = await axios.get(`${USER_URI}/payment/allpayments`, { headers: { "Content-Type": "application/json" }, withCredentials: true });
            if (!response) {
                console.log("Something wrong in getting payments")
            }
            setAllPayments(response.data.payments.map(item => ({
                sendername: item.sendername,
                sendercardnumber: item.sendercardnumber,
                receivername: item.receivername,
                receivercardnumber: item.receivercardnumber,
                amount: item.amount,
                currentBalance: item.currentBalance,
                createdAt: item.createdAt
            })));

            setAllDashPayments(response.data.payments.map(item => ({
                sendername: item.sendername,
                sendercardnumber: item.sendercardnumber,
                receivername: item.receivername,
                receivercardnumber: item.receivercardnumber,
                amount: item.amount,
                currentBalance: item.currentBalance,
                createdAt: item.createdAt
            })));
        } catch (error) {
            console.log(error)
        }
    }

    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.trim().split(" ");
        return (parts[0][0] + (parts[1]?.[0] || "")).toUpperCase();
    };

    return (
        <>
            <table width={`100%`} className=''>
                <thead>
                    <tr className="text-gray-600 text-sm">
                        <th className="pb-2">Receiver</th>
                        <th className="pb-2">Amount</th>
                        <th className="pb-2">Date</th>
                        <th className="pb-2">Balance</th>
                        <th className="pb-2">Sender</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {allPayments.map((item, key) => (
                        SelectCard ? (SelectCard == item.sendercardnumber || SelectCard == item.receivercardnumber ? (<tr key={key} className='border-b border-gray-300'>
                            <td className="flex items-center gap-3 p-3">
                                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">{getInitials(item.receivername)}</div>
                                <div>
                                    <div className="font-medium">{item.receivername} {item.receivercardnumber}</div>
                                </div>
                            </td>
                            {(() => {
                                const isSender = currUserData.cards.some(
                                    (card) => String(card.cardnumber) === String(item.sendercardnumber)
                                );

                                return (
                                    <td
                                        className={`p-3 ${isSender ? 'text-red-500' : 'text-green-600'}`}
                                    >
                                        {isSender ? `-${item.amount}` : `+${item.amount}`}
                                    </td>
                                );
                            })()}
                            <td className="p-3">{new Date(item.createdAt).toLocaleString()}</td>
                            <td className="p-3">{item.currentBalance}</td>
                            <td className="p-3 flex items-center gap-2">
                                <div>
                                    <div className="font-medium">{item.sendername} {item.sendercardnumber}</div>
                                    <div className="text-xs text-gray-500">Expired in 24/10</div>
                                </div>
                            </td>

                        </tr>) : null) : (<tr key={key} className='border-b border-gray-300'>

                            <td className="flex items-center gap-3 p-3">
                                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">{getInitials(item.receivername)}</div>
                                <div>
                                    <div className="font-medium">{item.receivername} {item.receivercardnumber}</div>
                                </div>
                            </td>
                            {(() => {
                                const isSender = currUserData.cards.some(
                                    (card) => String(card.cardnumber) === String(item.sendercardnumber)
                                );

                                return (
                                    <td
                                        className={`p-3 ${isSender ? 'text-red-500' : 'text-green-600'}`}
                                    >
                                        {isSender ? `-${item.amount}` : `+${item.amount}`}
                                    </td>
                                );
                            })()}
                            <td className="p-3">{new Date(item.createdAt).toLocaleString()}</td>
                            <td className="p-3">{item.currentBalance}</td>

                            <td className="p-3 flex items-center gap-2">
                                <div>
                                    <div className="font-medium">{item.sendername} {item.sendercardnumber}</div>
                                    <div className="text-xs text-gray-500">Expired in 24/10</div>
                                </div>
                            </td>
                        </tr>)
                    ))}
                </tbody >
            </table ></>
    )
}

export default Transactions