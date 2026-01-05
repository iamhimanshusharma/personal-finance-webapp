import React from 'react'

const Test = () => {
    return (
        <>
            <div class="p-6 bg-white rounded-2xl shadow">
                <table class="w-full text-left border-separate border-spacing-y-3">
                    <thead>
                        <tr class="text-gray-600 text-sm">
                            <th class="pb-2">Transactions</th>
                            <th class="pb-2">Amount</th>
                            <th class="pb-2">Date</th>
                            <th class="pb-2">Balance</th>
                            <th class="pb-2">Account</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-gray-800">
                        <tr class="bg-gray-50 hover:bg-gray-100 rounded-xl">
                            <td class="flex items-center gap-3 p-3">
                                <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">SP</div>
                                <div>
                                    <div class="font-medium">Name CardNumber</div>
                                </div>
                            </td>
                            <td class="p-3">- $18.49</td>
                            <td class="p-3">August 18</td>
                            <td class="p-3">- $18.49</td>
                            <td class="p-3 flex items-center gap-2">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Visa_2014_logo_detail.svg" alt="Visa" class="w-6" />
                                <div>
                                    <div class="font-medium">Visa 9487</div>
                                    <div class="text-xs text-gray-500">Expired in 24/10</div>
                                </div>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Test