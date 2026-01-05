import { Link, NavLink, Router } from "react-router-dom"
import IconTextButtonActive from "./IconTextButtonActive"

const IconTextButton = ({ Path, IconSource, FilledIconSource, ButtonText, OnClickHandler, ClassName }) => {
    return (
        <>

            <NavLink to={Path}>
                {({ isActive }) => isActive ? (
                    <IconTextButtonActive FilledIconSource={FilledIconSource} ButtonText={ButtonText} OnClickHandler={OnClickHandler} ClassName={ClassName} />

                ) : (
                    <button onClick={OnClickHandler} className={`${ClassName} w-full rounded-md py-2 text-gray-700 text-left px-2 text-xs font-bold cursor-pointer`}>
                        <span className="flex items-center">
                            <img
                                src={`/images/button_icons/${IconSource}`}
                                alt=""
                                className="w-4 h-4 mx-2"
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