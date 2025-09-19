import React, { useState } from 'react'
import ContentsHeader from '../contents/ContentsHeader'
import { useContext } from 'react'
import IconTextButton from '../utils/IconTextButton'
import AddCardPopup from './AddCardPopup'
import SearchBar from './components/SearchBar'
import { UserContext } from '../contexts/UserContext'

const Cards = () => {
    const { currUserData } = useContext(UserContext);
    const [showCardDetails, setShowCardDetails] = useState(0)
    const [addCardPopup, setAddCardPopup] = useState(false);

    return (
        <>
            <ContentsHeader Title={"Cards"} />

            <div className='max-w-full m-2'>
                <div className='flex items-center justify-between'>
                    <SearchBar />
                    <IconTextButton IconSource={"add.png"} FilledIconSource={"home.png"} ButtonText={"Add Card"} OnClickHandler={() => setAddCardPopup(!addCardPopup)} />
                </div>
                <AddCardPopup Show={addCardPopup} OnClose={() => setAddCardPopup(false)} />
                <div className='flex items-center overflow-auto p-2 custom-scrollbar'>
                    {
                        currUserData.cards.map((item, key) => (
                            <div onClick={() => setShowCardDetails(key)} key={key} className='shadow-md min-w-80 h-50 m-2 ring-1 ring-gray-100 rounded-lg p-4 cursor-pointer transition ease-in-out duration-300 hover:scale-105'>
                                <p>{item.bankname}</p>
                                <p>{item.name}</p>
                                <p>{item.cardnumber}</p>
                                <p>{`${item.expiry.split("/")[0].padStart(2, '0')} / ${item.expiry.split("/")[1].padStart(2, '0')}`}</p>
                            </div>
                        ))
                    }
                </div>
                <p className='text-sm font-bold m-2'>Card Details</p>
                <div className='px-4'>
                    <table className='' width={`100%`}>
                        <tbody>
                            <tr>
                                <td className='text-sm font-bold'>Name</td>
                                <td>{currUserData.cards[showCardDetails]?.name}</td>
                            </tr>
                            <tr>
                                <td className='text-sm font-bold'>Card Number</td>
                                <td>{currUserData.cards[showCardDetails]?.cardnumber}</td>
                            </tr>
                            <tr>
                                <td className='text-sm font-bold'>Balance</td>
                                <td>{currUserData.cards[showCardDetails]?.balance} ₹</td>
                            </tr>
                            <tr>
                                <td className='text-sm font-bold'>Expiry</td>
                                <td>{`${currUserData.cards[showCardDetails]?.expiry.split("/")[0].padStart(2, '0')} / ${currUserData.cards[showCardDetails]?.expiry.split("/")[1].padStart(2, '0')}`}</td>
                            </tr>
                            <tr>
                                <td className='text-sm font-bold'>Type</td>
                                <td>{currUserData.cards[showCardDetails]?.type}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}

export default Cards