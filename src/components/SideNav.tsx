import { useState } from 'react';
import Arrow from "../assets/Arrow.png"
import Console from "../assets/console.png"
import Attendance from "../assets/Attendance.png"
import Overview from "../assets/OverView.png"
import Staff from "../assets/Staff.png"
import Home from "../assets/Home.png"

const SideNavDesktop = () => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };
    return (
        <div className="w-56">
            <div className='flex gap-3 items-center font-semibold py-3 px-9 cursor-pointer border-b-8 border-[#fff] hover:bg-[#F0F0F0] hover:border-b-8 hover:border-[#CC2610]'>
                <img src={Home} alt="Home" />
                <p className='block font-semibold'>Home</p>
            </div>
            <div className="font-semibold p-4 cursor-pointer flex gap-2 items-center" onClick={toggleSubMenu}>
                <img src={Arrow} alt="Arrow" className={subMenuOpen ? "" : " rotate-180"} />
                <div className='flex gap-3 items-center'>
                    <img src={Console} alt="console-menu" />
                    <p className='text-[#1A0A02] text-[16px] font-semibold'>Console</p>
                </div>
            </div>
            {subMenuOpen && (
                <ul className=' ml-7 grid'>
                    <li className="p-4 grid grid-cols-[auto,1fr] gap-3 items-center">
                        <img src={Attendance} alt="Attendance" />
                        <p className="block font-semibold">Attendance</p>
                    </li>
                    <li className="p-4 grid grid-cols-[auto,1fr] gap-3 items-center">
                        <img src={Overview} alt="Overview" />
                        <p className="block font-semibold">Overview</p>
                    </li>
                    <li className="p-4 grid grid-cols-[auto,1fr] gap-3 items-center">
                        <img src={Staff} alt="Staff" />
                        <p className="block font-semibold">Staff</p>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default SideNavDesktop;