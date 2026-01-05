import React, { useState } from 'react'

const Splitter = () => {
    const [participants, setParticipants] = useState([]);
    const [userData, setUserData] = useState({
        name: "",
        amount: ""
    });
    const [form, setForm] = useState(false);
    const [results, setResults] = useState([]);

    function onChangeHandler(e) {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    function addUserHandler(e) {
        e.preventDefault();

        if (!userData.name || userData.amount === "") return;

        const user = {
            name: userData.name,
            amount: parseFloat(userData.amount)
        };

        setParticipants(prev => [...prev, user]);
        setUserData({ name: "", amount: "" });
        setForm(false);
    }

    function calculateHandler() {
        const total = participants.reduce((acc, p) => acc + p.amount, 0);
        const fairShare = total / participants.length;

        const updated = participants.map(p => ({
            ...p,
            balance: (p.amount - fairShare).toFixed(2)
        }));

        setResults(updated);
    }

    return (
        <>
            <div className='shadow rounded-md p-4 m-2 h-95 overflow-auto custom-scrollbar'>
                <p className='text-xl font-bold text-center mb-2'>Money Splitter</p>

                <div className=''>
                    <button
                        className="px-3 py-2 bg-blue-500 text-white rounded"
                        onClick={() => setForm(!form)}
                    >
                        {form ? "Cancel" : "Add Participant"}
                    </button>

                    {form && (
                        <form onSubmit={addUserHandler} className="my-3 flex gap-2">
                            <input
                                type="text"
                                name="name"
                                value={userData.name}
                                placeholder="Name"
                                onChange={onChangeHandler}
                                className="border p-2 rounded"
                                required
                            />
                            <input
                                type="number"
                                name="amount"
                                value={userData.amount}
                                placeholder="Amount Paid"
                                onChange={onChangeHandler}
                                className="border p-2 rounded"
                                required
                            />
                            <button
                                type="submit"
                                className="px-3 py-2 bg-green-500 text-white rounded"
                            >
                                Add
                            </button>
                        </form>
                    )}

                    {participants.length > 0 && (
                        <>
                            <h3 className="font-semibold mt-4 mb-2">Participants</h3>
                            <ul className="list-disc ml-5">
                                {participants.map((p, i) => (
                                    <li key={i}>
                                        {p.name}: ₹{p.amount}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={calculateHandler}
                                className="mt-3 bg-indigo-500 text-white px-4 py-2 rounded"
                            >
                                Calculate Split
                            </button>
                        </>
                    )}

                    {results.length > 0 && (
                        <>
                            <h3 className="font-semibold mt-4 mb-2">Results</h3>
                            <ul className="list-disc ml-5">
                                {results.map((r, i) => (
                                    <li key={i}>
                                        {r.name}: {r.balance > 0
                                            ? (<span className='text-green-500'>+{r.balance}</span>)
                                            : (<span className='text-red-500'>{r.balance}</span>)}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Splitter