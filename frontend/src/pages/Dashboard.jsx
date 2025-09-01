import React, { useContext, useEffect, useState } from 'react'
import ContentsHeader from '../contents/ContentsHeader'
import IconTextButton from '../utils/IconTextButton'
import IconTextButtonActive from '../utils/IconTextButtonActive'
import { SideBarContext } from '../contexts/SideBarContext'
import { NavLink } from 'react-router-dom'
import OutlinedIconButton from '../utils/OutlinedIconButton'
import OutlinedIconTextButton from '../utils/OutlinedIconTextButton'
import LineChart from '../graphs/LineChart'
import axios from 'axios'
import { USER_URI } from '../constants'
import Transactions from './components/Transactions'
import BalanceChart from '../graphs/BalanceChart'
import CashBreakdownChart from '../graphs/CashBreakdownChart'
import FinanceHealthChart from '../graphs/FinanceHealthChart'
import FinanceHealthGauge from '../graphs/FinanceHealthGauge'
import Tabs from './components/Tabs'
import SearchBar from './components/SearchBar'

const Dashboard = () => {
    const { currUserData } = useContext(SideBarContext);
    const [currCardNumber, setCurrCardNumber] = useState();
    const currCard = currUserData?.cards[0]?.cardnumber;
    let DataBalance = []
    let currBalance = 0;
    let income = 0;
    let expense = 0;

    const [allDashPayments, setAllDashPayments] = useState([{
        sendername: "",
        sendercardnumber: "",
        receivername: "",
        receivercardnumber: "",
        amount: 0,
        currentBalance: 0,
        createdAt: ""
    }])


    if (currCardNumber) {
        currBalance = currUserData.cards.filter(obj => obj.cardnumber === currCardNumber);
        DataBalance = allDashPayments
            .filter(item => item.sendercardnumber === currCardNumber || item.receivercardnumber === currCardNumber)
            .map(item => item.currentBalance);
    } else {
        currBalance = currUserData.cards.filter(obj => obj.cardnumber === currCard);
        DataBalance = allDashPayments
            .filter(item => item.sendercardnumber === currCard || item.receivercardnumber === currCard)
            .map(item => item.currentBalance);
    }

    let cards = [];
    cards = currUserData.cards.map(item => item.cardnumber)

    const incomeResult = allDashPayments.filter(obj => !cards.includes(obj.sendercardnumber) && cards.includes(obj.receivercardnumber))
    const expenseResult = allDashPayments.filter(obj => cards.includes(obj.sendercardnumber) && !cards.includes(obj.receivercardnumber))

    incomeResult.map(item => income += item.amount);
    expenseResult.map(item => expense += item.amount);

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
                    <SearchBar />
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
                                    <p className='text-2xl font-bold'>₹ {income}</p>
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
                                    <p className='text-2xl font-bold'>₹ {expense}</p>
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
                    <div className="relative col-span-1 row-span-5 ring-1 ring-gray-300 rounded-md h-82 py-2 px-2">
                        <div className='overflow-auto custom-scrollbar h-70'>
                            <div className='flex items-center justify-between px-2'>
                                <p className='text-sm font-bold'>My Card</p>
                                <NavLink to={"/cards"}>
                                    <button className='ring-1 text-xs p-1 rounded-sm ring-gray-200 cursor-pointer hover:bg-gray-200'>See All</button>
                                </NavLink>
                            </div>
                            <div className='flex items-center overflow-auto px-1 pb-1 custom-scrollbar'>
                                {
                                    currUserData.cards.map((item, key) => (
                                        <div key={key} onClick={() => setCurrCardNumber(item.cardnumber)} className='shadow-md min-w-37 h-22 m-2 ring-1 ring-gray-100 rounded-lg p-2 cursor-pointer transition ease-in-out duration-300 hover:scale-105'>
                                            <p className='text-xs'>{item.name}</p>
                                            <p className='text-xs font-bold'>{item.cardnumber}</p>
                                            <p className='text-xs'>{`${item.expiry.split("/")[0].padStart(2, '0')} / ${item.expiry.split("/")[1].padStart(2, '0')}`}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='m-1 ring-1 ring-gray-200 rounded-md'>
                                <BalanceChart CurrBalance={currBalance[0]?.balance} DataBalance={DataBalance} />
                            </div>
                        </div>
                        <div className='absolute bottom-1'>
                            <div className='flex items-center gap-x-2'>
                                <OutlinedIconTextButton IconSource={"add.png"} ButtonText={"Add"} />
                                <OutlinedIconTextButton IconSource={"send.png"} ButtonText={"Send"} />
                                <OutlinedIconTextButton IconSource={"cycle.png"} ButtonText={"Request"} />
                                <OutlinedIconButton IconSource={"vertical_dot.png"} />
                            </div>
                        </div>
                        <div />
                    </div>
                    <div className="col-span-2 row-span-4 ring-1 ring-gray-300 rounded-md h-64 overflow-auto custom-scrollbar">
                        <div className='flex items-center justify-between px-4 pt-2'>
                            <p className='text-sm font-bold'>Finance Health</p>
                            <Tabs />
                        </div>
                        <div className='m-1 text-xs'>
                            <CashBreakdownChart />
                        </div>
                    </div>
                    <div className="col-span-2 row-span-4 ring-1 ring-gray-300 rounded-md h-64 overflow-auto custom-scrollbar">
                        <div className='flex items-center justify-between px-4 py-2'>
                            <p className='text-sm font-bold'>Finance Health</p>
                            <div className="flex">
                                <NavLink to={"/cards"}>
                                    <button className='ring-1 text-xs p-1 rounded-sm ring-gray-200 cursor-pointer hover:bg-gray-200 mr-1'>Filters</button>
                                </NavLink>
                                <NavLink to={"/cards"}>
                                    <button className='ring-1 text-xs p-1 rounded-sm ring-gray-200 cursor-pointer hover:bg-gray-200 ml-2'>See All</button>
                                </NavLink>
                            </div>
                        </div>
                        <div className='mx-3 text-xs'>
                            <Transactions allDashPayments={allDashPayments} setAllDashPayments={setAllDashPayments} />
                        </div>
                    </div>
                    <div className="col-span-1 row-span-3 ring-1 ring-gray-300 rounded-md h-64">
                        <div className='flex items-center justify-between px-4 py-2'>
                            <p className='text-sm font-bold'>Finance Health</p>
                            <NavLink to={"/cards"}>
                                <button className='ring-1 text-xs p-1 rounded-sm ring-gray-200 cursor-pointer hover:bg-gray-200'>See More</button>
                            </NavLink>
                        </div>
                        <FinanceHealthChart />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard