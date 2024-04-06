import SideNavDesktop from "../SideNav";
import TaskCard from "../TaskCard";
import TaskData from "../../Data/TaskData";
import {Task} from "../TaskCard"
const MainContainer = () => {
    return (
        <section className="md:mt-5 flex gap-6 p-4 lg:p-2">
            <SideNavDesktop />
            <div id="TaskList_container" className="w-full lg:mr-8">
                <h2 className="hidden md:block text-[24px] font-bold mb-5">Tasks of the day</h2>
                <div className="flex gap-3 lg:gap-4 overflow-x-auto overflow-y-hidden">
                    <div className="px-2 py-1 text-[12px] lg:text-[14px] text-[#767676] border border-[#B8B8B8] rounded-[20px] whitespace-nowrap cursor-pointer">Not Accepted</div>
                    <div className="px-2 py-1 text-[12px] lg:text-[14px] text-[#767676] border border-[#B8B8B8] rounded-[20px] whitespace-nowrap cursor-pointer">Ongoing</div>
                    <div className="px-2 py-1 text-[12px] lg:text-[14px] text-[#767676] border border-[#B8B8B8] rounded-[20px] whitespace-nowrap cursor-pointer">Scheduled</div>
                    <div className="px-2 py-1 text-[12px] lg:text-[14px] text-[#767676] border border-[#B8B8B8] rounded-[20px] whitespace-nowrap cursor-pointer">Completed</div>
                    <div className="px-2 py-1 text-[12px] lg:text-[14px] text-[#767676] border border-[#B8B8B8] rounded-[20px] whitespace-nowrap cursor-pointer">Delayed</div>
                    <div className="px-2 py-1 text-[12px] lg:text-[14px] text-[#767676] border border-[#B8B8B8] rounded-[20px] whitespace-nowrap cursor-pointer">Ontime</div>
                </div>
                <div id="Task_lists" className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 mb-24 md:mb-16 md:mt-8">
                    {
                        TaskData.map((task: Task, index: number) => (
                            <TaskCard task={task} key={index}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default MainContainer;