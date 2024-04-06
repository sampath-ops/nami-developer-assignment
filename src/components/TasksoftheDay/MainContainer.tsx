import SideNavDesktop from "../SideNav";
import TaskCard from "../TaskCard";
import TaskData from "../../Data/TaskData";
import { Task } from "../TaskCard";
import { useState } from "react";

const MainContainer = () => {

    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const handleFilterChange = (filter: string) => {
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter(f => f !== filter));
        } else {
            setSelectedFilters([...selectedFilters, filter]);
        }
    };

    const filteredTasks = TaskData.filter(task => {
        if (selectedFilters.length === 0) return true;
        return task.tags.some(tag => {
            if (tag === "On - Time") {
                tag = "Ontime"
            }
            return selectedFilters.includes(tag)
        });
    });

    return (
        <section className="md:mt-5 flex gap-6 p-4 lg:p-2">
            <SideNavDesktop />
            <div id="TaskList_container" className="w-full lg:mr-8">
                <h2 className="hidden md:block text-[24px] font-bold mb-5">Tasks of the day</h2>
                <div className="flex gap-3 lg:gap-4 overflow-x-auto overflow-y-hidden">
                    <div className={`px-2 py-1 text-[12px] lg:text-[14px] text-[#767676] border  rounded-[20px] whitespace-nowrap cursor-pointer ${selectedFilters.includes("Not Accepted") ? "border-[#DC5B19]" : "border-[#B8B8B8]"}`} onClick={() => handleFilterChange("Not Accepted")}>Not Accepted</div>
                    <div className={`px-2 py-1 text-[12px] lg:text-[14px] text-[#767676] border rounded-[20px] whitespace-nowrap cursor-pointer ${selectedFilters.includes("Ongoing") ? "border-[#DC5B19]" : "border-[#B8B8B8]"}`} onClick={() => handleFilterChange("Ongoing")}>Ongoing</div>
                    <div className={`px-2 py-1 text-[12px] lg:text-[14px] text-[#767676] border rounded-[20px] whitespace-nowrap cursor-pointer ${selectedFilters.includes("Scheduled") ? "border-[#DC5B19]" : "border-[#B8B8B8]"}`} onClick={() => handleFilterChange("Scheduled")}>Scheduled</div>
                    <div className={`px-2 py-1 text-[12px] lg:text-[14px] text-[#767676] border rounded-[20px] whitespace-nowrap cursor-pointer ${selectedFilters.includes("Completed") ? "border-[#DC5B19]" : "border-[#B8B8B8]"}`} onClick={() => handleFilterChange("Completed")}>Completed</div>
                    <div className={`px-2 py-1 text-[12px] lg:text-[14px] text-[#767676] border rounded-[20px] whitespace-nowrap cursor-pointer ${selectedFilters.includes("Delayed") ? "border-[#DC5B19]" : "border-[#B8B8B8]"}`} onClick={() => handleFilterChange("Delayed")}>Delayed</div>
                    <div className={`px-2 py-1 text-[12px] lg:text-[14px] text-[#767676] border rounded-[20px] whitespace-nowrap cursor-pointer ${selectedFilters.includes("Ontime") ? "border-[#DC5B19]" : "border-[#B8B8B8]"}`} onClick={() => handleFilterChange("Ontime")}>Ontime</div>
                </div>
                <div id="Task_lists" className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 mb-24 md:mb-16 md:mt-8">
                    {
                        filteredTasks.map((task: Task, index: number) => (
                            <TaskCard task={task} key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default MainContainer;