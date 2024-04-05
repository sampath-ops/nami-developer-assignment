import search from "../assets/Searchbar.png";
import notification from "../assets/Notification.png";
import profile from "../assets/profile.png";
import SearchSelect from "./ReactSelect";

const MobileNav = () => {

    return (
        <nav className="md:hidden">
            <div className="flex items-center justify-between p-4">
                <p className=" text-[16px] text-[#1A0A02] font-bold">Tasks of the Day</p>
                <div className="flex items-center gap-2">
                    <img src={search} alt="search" className=" w-5"  />
                    <img src={notification} alt="notification" className=" w-6" />
                    <img src={profile} alt="user-profile" className=" w-6" />
                </div>
            </div>
            <div>
                <SearchSelect/>
            </div>
        </nav>
    );
}

export default MobileNav;