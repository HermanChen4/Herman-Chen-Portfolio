function Navbar () {
    return (
        <div className=" bg-[#30C67C] text-md absolute top-0 flex text-center rounded-b-lg" >
            <div className="flex flex-row py-2 px-2">
                <div className="pr-3 font-semibold">
                    About Me
                </div>
                <div className="pr-3 pl-3">
                    |
                </div>
                <div className="pr-3 pl-3 font-semibold">
                    My Works
                </div>
                <div className="pr-3 pl-3">
                    |
                </div>
                <div className="pl-3 font-semibold">
                    Contact
                </div>
            </div>
        </div>
    )
}


export default Navbar