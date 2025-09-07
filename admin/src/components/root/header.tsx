import { PanelRightClose } from "lucide-react"

const HeaderLayout = () => {
    return (
        <header className="">
            <button className="p-2 rounded-ms overflow-hidden" role="button">
               <PanelRightClose />
            </button>
            <div className="" id="search__input">
                <input type="text" placeholder="Qidirish..."/>
            </div>
        </header>
    )
}

export default HeaderLayout