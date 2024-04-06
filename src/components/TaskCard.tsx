import hotelSymbol from "../assets/hotel_symbol.png"
import Schedule from "../assets/Schedule.png"
import greenClock from "../assets/GreenClock.png"
import redClock from "../assets/RedClock.png"
import ScheduleOneTime from "../assets/ScheduleOneTime.png"
import NotifyStaff from "../assets/NotifyStaff.png"
import TaskTime from "../assets/TaskTime.png"
import Star from "../assets/Star.png"
import { useState } from "react"

export interface Task {
    taskId: string;
    taskType: string;
    taskStatus: string;
    taskName: string;
    staffName: string;
    tags: string[];
    rating: number;
    isScheduled: boolean;
    isRecurring: boolean;
    date: Date;
    RequestDetails: {
        itemRequest: {} // An object with string keys and number values
        serviceRequest: string[];
        instructions: string[];
    };
    from: string;
    to: string;
    timeRemain: number;
    isCompleted: boolean;
}

interface TaskCardProps {
    task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {

    const [showDetails, setShowDetails] = useState(false);

    const openDetailsHandler = () => {
        setShowDetails(!showDetails)
    }

    const FormatedDate = (date: Date) => {

        // Parse the input date string
        const inputDate = date

        // Format the date in the required format
        const result = `${inputDate.getDate()} ${inputDate.toLocaleString('default', { month: 'short' })} ${inputDate.getFullYear()} | ${inputDate.toLocaleString('default', { hour: '2-digit', minute: '2-digit', hour12: true }).toLocaleLowerCase()}`;
        return result;
    }

    return (
        <div className={`grid gap-y-1  border border-[#B8B8B8] rounded-[20px] p-2 md:p-3 cursor-pointer ${showDetails ? " row-span-2" : ""}`} onClick={openDetailsHandler}>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                    <div className="flex gap-2 items-center bg-[#F7F7F7] p-1 md:px-2 py-1 rounded-lg">
                        <img src={hotelSymbol} alt="card_logo" />
                        <p className="text-[12px] font-bold">{task.staffName}</p>
                        <span className="rounded-full w-2 h-2 bg-[#CC2610]"></span>
                    </div>
                    {
                        !task.isCompleted ? (
                            <div className={`px-1 md:px-2 py-1 font-semibold border-0 rounded-[20px] text-[12px] ${task.taskStatus === "Not Accepted" ? "text-[#CC2610] bg-[#F7F7F7]" :
                                task.taskStatus === "Ongoing" ? "text-[#F1AE11] bg-[#F7F7F7]" :
                                    task.taskStatus === "Scheduled" ? "text-[#1A0A02] bg-[#F7F7F7]" : ""
                                }`}>{task.taskStatus}
                            </div>
                        ) :
                            task.tags.map((tag, index) => (
                                <div className={`px-1 md:px-2 py-1 font-semibold border-0 rounded-[20px] text-[10px] lg:text-[12px] text-white ${tag === "Delayed" || tag == "Complaint" ? "bg-[#CC2610]" : "bg-[#00A441]"}`} key={index}>{tag}</div>
                            ))

                    }

                    <div className="px-1 md:px-2 py-1 bg-[#F7F7F7] rounded-[20px]">
                        {
                            task.isScheduled && (task.isRecurring ? <img src={Schedule} alt="Schedule" /> : <img src={ScheduleOneTime} alt="Schedule" />)
                        }
                    </div>
                </div>
                {
                    (task.taskStatus !== "Ongoing" && !task.isCompleted) &&
                    <div className={`grid gap-1 grid-cols-[auto,auto] items-center rounded-full px-2 ${task.timeRemain < 0 ? "bg-[#F4D8D8]" : "bg-[#D7FFE7]"}`}>
                        <img src={task.timeRemain > 0 ? greenClock : redClock} alt="clock" />
                        <p className={`text-[12px] font-semibold ${task.timeRemain < 0 ? "text-[#CC2610]" : "text-[#00A441]"}`}>{Math.abs(task.timeRemain)} min</p>
                    </div>
                }
                {
                    task.isCompleted && (
                        <div className={`flex gap-1 items-center rounded-[20px] p-[2px] px-3 ${task.rating < 3 ? "bg-[#CC2610]" : "bg-[#00A441]"}`}>
                            <p className="text-white text-[12px] font-bold">{task.rating}</p>
                            <img src={Star} alt="star" />
                        </div>
                    )
                }
            </div>
            <div className="flex justify-between items-center">
                <p className=" text-[14px] md:text-[16px] font-bold">{task.taskName}</p>
                <div className={`px-1 py-0 border-0 md:p-1 bg-[#F7F7F7] rounded-[20px] text-[12px] font-semibold ${task.taskType === "Guest Task" ? "text-[#DC5B19]" : "text-[#5F69C7]"}`}>{task.taskType}</div>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <img src={TaskTime} alt="calender" />
                    <p className="text-[12px] md:text-[16px] text-[#767676]">{FormatedDate(task.date)}</p>
                </div>
                <p className="text-[12px] md:text-[16px] text-[#767676]">#{task.taskId}</p>
            </div>
            <div className="flex justify-between">
                <p className="text-[12px] md:text-[16px] text-[#767676] font-semibold">From: {task.from}</p>
                <p className="text-[12px] md:text-[16px] text-[#767676] font-semibold">To: {task.to}</p>
            </div>

            {
                showDetails &&
                <div className="p-2 md:p-4 md:mt-1 bg-[#F7F7F7] list-none gap-y-1 md:gap-y-2 grid">
                    {
                        Object.entries(task.RequestDetails.itemRequest).map(([item, count]: [string, any], index) => (
                            <li className="text-[#1A0A02] font-bold text-[12px] md:text-[14px]" key={index}>{item}: <span className=" text-[#5D5E60] font-light">x{count}</span></li>
                        ))
                    }
                    {task.RequestDetails.serviceRequest.map((service, index) => (
                        <li key={index} className="text-[12px] md:text-[14px] font-bold">{service}</li>
                    ))}
                    {task.RequestDetails.instructions.length > 0 && (
                        <p className="text-[#5F69C7] text-[12px] md:text-[14px]">Instructions: {task.RequestDetails.instructions[0]}</p>
                    )}
                </div>
            }
            {
                task.taskStatus !== "Ongoing" ? (
                    !task.isCompleted ?
                    <div className="flex w-full mt-2">
                        <button className={` py-2 md:py-3 text-[#FFECE2] rounded-full w-full flex items-center justify-center gap-2 ${task.timeRemain < 0 ? "bg-[#CC2610]" : "bg-[#5F69C7]"}`}>
                            <img src={NotifyStaff} alt="circle-tick" />
                            <p>Notify Staff</p></button>
                    </div> :
                    <div className="flex w-full mt-2">
                        <button className={` py-2 md:py-3 text-[#5F69C7] rounded-full w-full border border-[#5F69C7]`}>
                            <p>View Details</p></button>
                    </div>
                ) : ""
            }
        </div>
    );
}

export default TaskCard;