import Plus from "../assets/Plus.png"
import Home from "../assets/Home.png"
import Console from "../assets/console.png"
const MobileFooter = () => {
    return (
        <footer className="md:hidden w-full fixed bottom-0 bg-white">
            <div className="grid grid-cols-2 rounded-tl-[18px] rounded-tr-[18px] py-3 shadow-md " style={{boxShadow: "0px -4px 6px rgba(0, 0, 0, 0.1)"}}>
                <div className=" absolute top-[-25px] left-[50%] transform -translate-x-1/2 p-4 bg-[#5F69C7] rounded-full">
                    <img src={Plus} alt="plus" />
                </div>
                <div className=" flex flex-col items-center">
                    <img src={Home} alt="home" />
                    <p className="text-[12px]">Home</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Console} alt="console" />
                    <p className="text-[12px]">Console</p>
                </div>
            </div>
        </footer>
    );
}

export default MobileFooter;