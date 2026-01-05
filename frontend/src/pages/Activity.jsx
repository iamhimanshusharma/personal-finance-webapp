import React, { useState } from 'react'
import ContentsHeader from '../contents/ContentsHeader'
import Splitter from './activity/Splitter';

const Activity = () => {
    const [splitter, setSplitter] = useState(false);

    return (
        <>
            <ContentsHeader Title={"Activity"} />

            <div className='m-2'>
                <div className='flex gap-3'>
                    <button onClick={() => setSplitter(!splitter)}>
                        <div className='rounded-md cursor-pointer p-7 shadow hover:bg-blue-300'>
                            <p>Splitter</p>
                        </div>
                    </button>

                    <button>
                        <div className='rounded-md cursor-pointer p-7 shadow hover:bg-blue-300'>
                            <p>Splitter</p>
                        </div>
                    </button>
                </div>
            </div>
            {
                splitter ? <Splitter /> : null
            }
        </>
    )
}

export default Activity;
