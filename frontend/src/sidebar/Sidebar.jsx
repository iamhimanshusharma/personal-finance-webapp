import SidebarHeader from './SidebarHeader'
import SidebarMainAndTools from './SidebarMainAndTools'
import SidebarFooter from './SidebarFooter'

const Sidebar = () => {

    return (
        <>
            <div className="flex flex-col justify-between h-full">
                <div>
                    <SidebarHeader />
                    <hr className="text-gray-300 font-bold my-3" />
                    <SidebarMainAndTools />
                </div>
                <SidebarFooter />
            </div>
        </>
    )
}

export default Sidebar