import IconTextButton from "../utils/IconTextButton"

const SidebarMainAndTools = () => {
    return (
        <div>
            <p className="uppercase text-xs font-bold text-gray-400 my-2">Main</p>
            <div>
                <ul>
                    <li>
                        <IconTextButton Path={"/"} IconSource={"home.svg"} FilledIconSource={"home_filled.png"} ButtonText={"Dashboard"} />
                    </li>
                    <li>
                        <IconTextButton Path={"/payment"} IconSource={"wallet.png"} FilledIconSource={"wallet_filled.png"} ButtonText={"Payment"} />
                    </li>
                    <li>
                        <IconTextButton Path={"/invoice"} IconSource={"invoice.png"} FilledIconSource={"invoice_filled.png"} ButtonText={"Invoice"} />
                    </li>
                    <li>
                        <IconTextButton Path={"/cards"} IconSource={"creditcard.svg"} FilledIconSource={"creditcard_filled.svg"} ButtonText={"Cards"} />
                    </li>
                </ul>

                <hr className="text-gray-300 font-bold my-3" />
                <p className="uppercase text-xs font-bold text-gray-400 mb-2 mt-4">Tools</p>
                <ul>
                    <li>
                        <IconTextButton Path={"/activity"} IconSource={"activity.png"} FilledIconSource={"activity_filled.png"} ButtonText={"Activity"} />
                    </li>
                    <li>
                        <IconTextButton Path={"/email"} IconSource={"email.png"} FilledIconSource={"email_filled.png"} ButtonText={"Email"} />
                    </li>
                    <li>
                        <IconTextButton Path={"/reports"} IconSource={"reports.png"} FilledIconSource={"reports_filled.png"} ButtonText={"Reports"} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SidebarMainAndTools