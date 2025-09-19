import React from 'react'
import { NavLink } from 'react-router-dom'

const InvoiceEntity = ({ Name, Invoice, Due, Status, Amount }) => {

    function OnClickHandler(e) {
        console.log("checked")
    }

    return (
        <>
            <div onClick={OnClickHandler} className='max-w-full shadow rounded-md py-4 mx-1 mt-1 hover:bg-gray-100 hover:cursor-pointer'>
                <div className='flex items-center justify-around flex-wrap text-gray-600'>
                    <p>{Name}</p>
                    <p>{Invoice}</p>
                    <p>{Due}</p>
                    <div className='flex items-center space-x-2'>
                        <img src="/images/other_icons/paid.png" alt="" className='h-4 w-4' />
                        <p >{Status}</p>
                    </div>
                    <p>₹ {Amount}</p>
                </div>
            </div>
        </>
    )
}

export default InvoiceEntity