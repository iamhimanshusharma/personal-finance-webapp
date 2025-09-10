import { Link, NavLink, Router } from "react-router-dom"
import IconTextButtonActive from "./IconTextButtonActive"

const IconTextButton = ({ Path, IconSource, ButtonText, OnClickHandler }) => {
    return (
        <>

            <NavLink to={Path}>
                {({ isActive }) => isActive ? (
                    <IconTextButtonActive FilledIconSource={IconSource} ButtonText={ButtonText} OnClickHandler={OnClickHandler} />

                ) : (
                    <button onClick={OnClickHandler} className="w-full rounded-md py-2 text-gray-700 text-left px-2 text-xs font-bold cursor-pointer">
                        <span className="flex items-center">
                            <img
                                src={`/images/button_icons/${IconSource}`}
                                alt=""
                                className="w-3 h-3 mx-2"
                            />
                            {ButtonText}
                        </span>
                    </button >
                )}
            </NavLink >

        </>
    )
}

export default IconTextButton