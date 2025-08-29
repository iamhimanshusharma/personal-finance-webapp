import React from 'react'

const OutlinedTextInput = ({ Title, Placeholder, Name, ClassName, Value, OnChange }) => {
    return (
        <>
            <div>
                <input className={`${ClassName} ring-1 ring-gray-400 rounded-sm px-2 pt-1 pb-1 mx-4 my-1`} type="text" placeholder={Placeholder} name={Name} value={Value} onChange={OnChange} />
                {/* <p className='absolute text-xs font-bold top-23 left-55 bg-white'>{Title}</p> */}
            </div>
        </>
    )
}

export default OutlinedTextInput