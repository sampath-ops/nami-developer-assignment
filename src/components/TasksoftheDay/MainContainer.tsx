import SideNavDesktop from "../SideNav";
import TaskCard from "../TaskCard";

const MainContainer = () => {
    return ( 
        <section className="md:mt-5 flex gap-6 p-4 lg:p-2">
            <SideNavDesktop/>
            <div id="TaskList_container" className="w-full lg:mr-8">
                <h2 className="hidden md:block text-[24px] font-bold mb-5">Tasks of the day</h2>
                <div className="flex gap-3 lg:gap-4 overflow-x-auto overflow-y-hidden">
                    <div className="px-1 py-1 text-[12px] lg:text-[14px] text-[#B8B8B8] border border-[#B8B8B8] rounded-[20px] whitespace-nowrap">Not Accepted</div>
                    <div className="px-1 py-1 text-[12px] lg:text-[14px] text-[#B8B8B8] border border-[#B8B8B8] rounded-[20px]">Ongoing</div>
                    <div className="px-1 py-1 text-[12px] lg:text-[14px] text-[#B8B8B8] border border-[#B8B8B8] rounded-[20px]">Scheduled</div>
                    <div className="px-1 py-1 text-[12px] lg:text-[14px] text-[#B8B8B8] border border-[#B8B8B8] rounded-[20px]">Completed</div>
                    <div className="px-1 py-1 text-[12px] lg:text-[14px] text-[#B8B8B8] border border-[#B8B8B8] rounded-[20px]">Delayed</div>
                    <div className="px-1 py-1 text-[12px] lg:text-[14px] text-[#B8B8B8] border border-[#B8B8B8] rounded-[20px]">Ontime</div>
                </div>
                <div id="Task_lists">
                    <TaskCard/>
                </div>
            </div>
        </section>
     );
}
 
export default MainContainer;