const IconTextButtonActive = ({ FilledIconSource, ButtonText, OnClickHandler, ClassName }) => {
    return (
        <>
            <button className={`${ClassName} bg-white w-full rounded-md py-2 shadow text-left pl-2 pr-4 text-xs font-bold cursor-pointer`} onClick={OnClickHandler}>
                <span className="flex items-center"><img src={`/images/button_icons/${FilledIconSource}`} alt=""
                    className="w-4 h-4 mx-2" />{ButtonText}</span></button>
        </>
    )
}

export default IconTextButtonActive