import React, { useEffect, useState } from 'react'
import IconTextButton from '../utils/IconTextButton';

const AddCardPopup = ({ Show, OnClose }) => {

    const [closePopup, setClosePopup] = useState(Show);

    useEffect(() => {
        setClosePopup(Show);
    }, [Show])

    return (
        <>
            <div className={`text-lg ${closePopup ? 'block' : 'hidden'} `}>
                hello
                <IconTextButton IconSource={"home.png"} OnClickHandler={OnClose} />
            </div>
        </>
    )
}

export default AddCardPopup