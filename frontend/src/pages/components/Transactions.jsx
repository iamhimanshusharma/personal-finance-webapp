import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { USER_URI } from '../../constants';
import { useContext } from 'react';

import { UserContext } from '../../contexts/UserContext';

const Transactions = ({ SelectCard, allDashPayments = [], setAllDashPayments = () => { } }) => { //Declare the type of props otherwise it throws error specially when function is given

    const { allCards, setAllCards } = useContext(UserContext);
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

    return (
        <>
            <table width={`100%`} className=''>
                <thead>
                    <tr className='text-left border-b border-gray-300'>
                        <th>Sender</th>
                        <th>Sender's Card Number</th>
                        <th>Receiver</th>
                        <th>Receiver's Card Number</th>
                        <th>Amount (₹)</th>
                        <th>Current Balance</th>
                        <th>Transaction Date</th>
                    </tr>
                </thead>
                <tbody>
                    {allPayments.map((item, key) => (
                        SelectCard ? (SelectCard == item.sendercardnumber || SelectCard == item.receivercardnumber ? (<tr key={key} className='border-b border-gray-300'>
                            <td>{item.sendername}</td>
                            <td>{item.sendercardnumber}</td>
                            <td>{item.receivername}</td>
                            <td>{item.receivercardnumber}</td>
                            <td>{item.amount}</td>
                            <td>{item.currentBalance}</td>
                            <td>{new Date(item.createdAt).toLocaleString()}</td>
                        </tr>) : null) : (<tr key={key} className='border-b border-gray-300'>
                            <td>{item.sendername}</td>
                            <td>{item.sendercardnumber}</td>
                            <td>{item.receivername}</td>
                            <td>{item.receivercardnumber}</td>
                            <td>{item.amount}</td>
                            <td>{item.currentBalance}</td>
                            <td>{new Date(item.createdAt).toLocaleString()}</td>
                        </tr>)
                    ))}
                </tbody >
            </table ></>
    )
}

export default Transactions