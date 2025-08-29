import React from 'react'
import ContentsHeader from '../contents/ContentsHeader'
import IconTextButton from '../utils/IconTextButton'
import IconTextButtonActive from '../utils/IconTextButtonActive'

const Dashboard = () => {

    function incomeHandler(e) {
        e.preventDefault();
        console.log("income");
    }

    function expenseHandler(e) {
        e.preventDefault();
        console.log("expense");
    }
    return (
        <>
            <ContentsHeader Title={"Dashboard"} />

            <div className='flex items-center justify-between py-3 px-4'>
                <div>
                    <input type="text" placeholder='Search' />
                </div>
                <div className='flex items-center'>
                    <div>

                    </div>
                    <div>
                        <IconTextButtonActive Path={"/export"} IconSource={"download.png"} FilledIconSource={"download.png"} ButtonText={"Export"} />
                    </div>
                </div>
            </div>

            <div className="h-105 px-4 py-1 overflow-auto">
                <div className="grid grid-cols-3 auto-rows-min gap-2">
                    <button onClick={incomeHandler} className='cursor-pointer hover:bg-gray-100'>
                        <div className="flex items-center justify-around col-span-1 row-span-1 ring-1 ring-gray-300 rounded-md h-16">
                            <div className='flex items-center'>
                                <img src="./src/images/other_icons/income.png" alt="" className='h-12 w-12' />
                                <div className='px-4'>
                                    <p className='text-xs text-gray-500 text-left'>Income</p>
                                    <p className='text-2xl font-bold'>$ {`2000.00`}</p>
                                </div>
                            </div>
                            <div className='flex items-center rounded-sm ring-1 ring-gray-200 p-1'>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="w-3 h-3 text-green-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 19V5m0 0l-7 7m7-7l7 7" />
                                </svg>
                                <p className='text-xs text-green-600 font-bold'>{`8`}%</p>
                            </div>
                        </div>
                    </button>
                    <button onClick={expenseHandler} className='cursor-pointer hover:bg-gray-100'>
                        <div className="flex items-center justify-around col-span-1 row-span-1 ring-1 ring-gray-300 rounded-md h-16">
                            <div className='flex items-center'>
                                <img src="./src/images/other_icons/expense.png" alt="" className='h-12 w-12' />
                                <div className='px-4'>
                                    <p className='text-xs text-gray-500 text-left'>Expenses</p>
                                    <p className='text-2xl font-bold'>$ {`2000.00`}</p>
                                </div>
                            </div>
                            <div className='flex items-center rounded-sm ring-1 ring-gray-200 p-1'>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="w-3 h-3 text-red-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 5v14m0 0l-7-7m7 7l7-7" />
                                </svg>
                                <p className='text-xs text-red-600 font-bold'>{`8`}%</p>
                            </div>
                        </div>
                    </button>
                    <div className="col-span-1 row-span-5 ring-1 ring-gray-300 rounded-md h-82">02</div>
                    <div className="col-span-2 row-span-4 ring-1 ring-gray-300 rounded-md h-64">04</div>
                    <div className="col-span-2 row-span-3 ring-1 ring-gray-300 rounded-md h-48">05</div>
                    <div className="col-span-1 row-span-3 ring-1 ring-gray-300 rounded-md h-48">06</div>
                </div>
            </div>
        </>
    )
}

export default Dashboard