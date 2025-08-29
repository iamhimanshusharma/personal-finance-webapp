const IconTextButtonActive = ({ FilledIconSource, ButtonText, OnClickHandler }) => {
    return (
        <>
            <button className="bg-white w-full rounded-md py-2 shadow text-left pl-2 pr-4 text-xs font-bold cursor-pointer" onClick={OnClickHandler}>
                <span className="flex items-center"><img src={`./src/images/button_icons/${FilledIconSource}`} alt=""
                    className="w-3 h-3 mx-2" />{ButtonText}</span></button>
        </>
    )
}

export default IconTextButtonActive