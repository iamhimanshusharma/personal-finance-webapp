import React, { useContext, useEffect, useState } from 'react'
import ContentsHeader from '../contents/ContentsHeader'
import OutlinedTextInput from '../utils/OutlinedTextInput'

const Activity = () => {

    const [addParticipants, setAddParticipants] = useState([<OutlinedTextInput key={`participant0`} Placeholder={`Participant 1`} OnChange={onChangeHandler} Name={`participant0`} />]);
    const [addParticipantAmount, setAddParticipantAmount] = useState([]);
    const [amount, setAmount] = useState(0);
    let total = 0;

    function addParticipantListener() {
        setAddParticipants([...addParticipants, <OutlinedTextInput key={`participant${addParticipants.length + 1}`} Placeholder={`Participant ${addParticipants.length + 1}`} OnChange={onChangeHandler} Name={`participant${addParticipants.length + 1}`} />])
    }

    function onChangeHandler(e) {
        setAddParticipantAmount([...addParticipantAmount, e.target.value]);
    }

    function calculateHandler(e) {
        e.preventDefault();
        addParticipantAmount.map(item => (
            total += parseInt(item)))
        setAmount(total)
        total = 0;
    }

    return (
        <>
            <ContentsHeader Title={"Activity"} />

            <button onClick={addParticipantListener}>Add</button>
            <div>
                {addParticipants}
            </div>
            <button onClick={calculateHandler}>Calculate</button>
        </>
    )
}

export default Activity