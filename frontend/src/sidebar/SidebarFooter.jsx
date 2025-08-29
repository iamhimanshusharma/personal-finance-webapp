import IconTextButton from "../utils/IconTextButton"

const SidebarFooter = () => {
    return (
        <div className="text-xs font-bold">
            <ul>
                <li>
                    <IconTextButton Path={"/settings"} IconSource={"setting.png"} FilledIconSource={"setting_filled.png"} ButtonText={"Settings"} />
                </li>
                <li>
                    <IconTextButton Path={"/helpandsupport"} IconSource={"help.png"} FilledIconSource={"help_filled.png"} ButtonText={"Help & Support"} />
                </li>
            </ul>
        </div>
    )
}

export default SidebarFooter