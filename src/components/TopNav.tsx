import profile from "../assets/profile.png"
import notification from "../assets/Notification.png"
const DesktopNav = () => {
    return (
        <nav className="hidden md:block">
            <div className="flex w-full justify-between p-8 border-b-2 ">
                <p className="md:text-[32px] text-[#1A0A02] font-bold">ABCHotel</p>
                <div className="flex gap-3">
                    <img src={notification} alt="notification" />
                    <img src={profile} alt="user-profile" />
                </div>
            </div>
        </nav>
    );
}

export default DesktopNav;