import Plus from "../assets/Plus.png"
import Home from "../assets/Home.png"
import Console from "../assets/console.png"
import Attendance from "../assets/Attendance.png"
import Overview from "../assets/OverView.png"
import Staff from "../assets/Staff.png"
import { useState } from "react"
const MobileFooter = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <footer className="md:hidden w-full fixed bottom-0 bg-white">
            <div className="grid grid-cols-2 rounded-tl-[18px] rounded-tr-[18px] py-3 shadow-md " style={{ boxShadow: "0px -4px 6px rgba(0, 0, 0, 0.1)" }}>
                <div className=" absolute top-[-25px] left-[50%] transform -translate-x-1/2 p-4 bg-[#5F69C7] rounded-full">
                    <img src={Plus} alt="plus" />
                </div>
                <div className=" flex flex-col items-center cursor-pointer">
                    <img src={Home} alt="home" />
                    <p className="text-[12px]">Home</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer" onClick={handleToggle}>
                    <img src={Console} alt="console" />
                    <p className="text-[12px]">Console</p>
                </div>
                {
                    menuOpen && (
                        <div className=" absolute top-[-265%] right-[14%] bg-white rounded-[16px] shadow-md ">
                            <li className="p-4 grid grid-cols-[auto,1fr] gap-3 items-center cursor-pointer">
                                <img src={Attendance} alt="Attendance" />
                                <p className="block font-semibold">Attendance</p>
                            </li>
                            <li className="p-4 grid grid-cols-[auto,1fr] gap-3 items-center cursor-pointer">
                                <img src={Overview} alt="Overview" />
                                <p className="block font-semibold">Overview</p>
                            </li>
                            <li className="p-4 grid grid-cols-[auto,1fr] gap-3 items-center cursor-pointer">
                                <img src={Staff} alt="Staff" />
                                <p className="block font-semibold">Staff</p>
                            </li>
                        </div>
                    )
                }
            </div>
        </footer>
    );
}

export default MobileFooter;