import React, { useState } from 'react'
import ContentsHeader from '../contents/ContentsHeader'
import { useContext } from 'react'
import { SideBarContext } from '../contexts/SideBarContext'
import IconTextButton from '../utils/IconTextButton'
import AddCardPopup from './AddCardPopup'

const Cards = () => {
    const { currUserData } = useContext(SideBarContext);
    const [showCardDetails, setShowCardDetails] = useState(0)
    const [addCardPopup, setAddCardPopup] = useState(false);

    return (
        <>
            <ContentsHeader Title={"Cards"} />

            <div className='max-w-full m-2'>
                <div className='flex items-center justify-between'>
                    <p className='text-2xl'>Cards</p>
                    <IconTextButton IconSource={"home.png"} FilledIconSource={"home.png"} ButtonText={"Add Card"} OnClickHandler={() => setAddCardPopup(!addCardPopup)} />
                    <AddCardPopup Show={addCardPopup} OnClose={() => setAddCardPopup(false)} />
                </div>
                <div className='flex items-center overflow-auto p-2 custom-scrollbar'>
                    {
                        currUserData.cards.map((item, key) => (
                            <div onClick={() => setShowCardDetails(key)} key={key} className='shadow-md min-w-80 h-50 m-2 ring-1 ring-gray-100 rounded-lg p-4 cursor-pointer transition ease-in-out duration-300 hover:scale-105'>
                                <p>{item.bankname}</p>
                                <p>{item.name}</p>
                                <p>{item.cardnumber}</p>
                                <p>{`${String(new Date(item.expiry).getUTCMonth() + 1).padStart(2, '0')} / ${new Date(item.expiry).getUTCFullYear().toString().slice(-2)}`}</p>
                            </div>
                        ))
                    }
                </div>
                <p className='text-sm font-bold m-2'>Card Details</p>
                <div className='px-4'>
                    <table className='table-fixed max-w-full'>
                        <tbody>
                            <tr>
                                <td className='text-sm font-bold'>Name</td>
                                <td>{currUserData.cards[showCardDetails]?.name}</td>
                            </tr>
                            <tr>
                                <td className='text-sm font-bold'>Bank Name </td>
                                <td>{currUserData.cards[showCardDetails]?.bankname}</td>
                            </tr>
                            <tr>
                                <td className='text-sm font-bold'>Card Number</td>
                                <td>{currUserData.cards[showCardDetails]?.cardnumber}</td>
                            </tr>
                            <tr>
                                <td className='text-sm font-bold'>Expiry</td>
                                <td>{`${String(new Date(currUserData.cards[showCardDetails]?.expiry).getUTCMonth() + 1).padStart(2, '0')} / ${new Date(currUserData.cards[showCardDetails]?.expiry).getUTCFullYear().toString()}`}</td>
                            </tr>
                            <tr>
                                <td className='text-sm font-bold'>Type</td>
                                <td>{currUserData.cards[showCardDetails]?.type}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Cards