import React, { useState } from 'react'
import ContentsHeader from '../contents/ContentsHeader'
import InvoiceEntity from './components/InvoiceEntity'
import IconTextButton from '../utils/IconTextButton';
import AddCardPopup from './AddCardPopup'
import SearchBar from './components/SearchBar';
import AddInvoice from './components/AddInvoice';

const Invoice = () => {
    const [addCardPopup, setAddCardPopup] = useState(false);
    return (
        <>
            <ContentsHeader Title={"Invoice"} />

            <div className='relative'>
                <div className='max-w-full m-2'>
                    <div className='flex items-center justify-between'>
                        <SearchBar />
                        <IconTextButton IconSource={"add.png"} FilledIconSource={"home.png"} ButtonText={"Create Invoice"} OnClickHandler={() => setAddCardPopup(!addCardPopup)} />
                    </div>
                    <AddInvoice Show={addCardPopup} OnClose={() => setAddCardPopup(false)} />
                </div>

                <div className='sticky shadow rounded-md py-4 mx-1 mt-1'>
                    <div className='flex items-center justify-around font-bold text-gray-700'>
                        <p>Name</p>
                        <p>Invoice</p>
                        <p>Due</p>
                        <p >Status</p>
                        <p>Amount</p>
                    </div>
                </div>
                <div className='overflow-auto max-h-93 custom-scrollbar'>
                    <InvoiceEntity Name={`customername`} Invoice={`invoicenumber`} Due={`duedate`} Status={`status`} Amount={`txnamount`} />
                </div>
            </div>
        </>
    )
}

export default Invoice