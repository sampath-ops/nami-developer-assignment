import hotelSymbol from "../assets/hotel_symbol.png"
const TaskCard = () => {
    const TaskList = [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15]
    return (
        <div className="grid grid-cols-3 gap-6 mt-8">
            {
                TaskList.map((val, index) => (
                    <div className="grid gap-y-1 border border-[#B8B8B8] rounded-[20px] p-4" key={index}>
                        <div className="flex items-center gap-3">
                            <div className="flex gap-2 items-center bg-[#F7F7F7] p-2 rounded-lg">
                                <img src={hotelSymbol} alt="card_logo" />
                                <p className="text-[12px] font-bold">Rajesh</p>
                                <span className=" rounded-full w-2 h-2 bg-[#CC2610]"></span>
                            </div>
                            <div className="px-1 py-2 text-[#CC2610] border bg-[#F7F7F7] rounded-[20px] text-[12px]">Not Accepted</div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="font-bold">Routine Cleaning</p>
                            <div className="p-1 text-[#DC5B19] border bg-[#F7F7F7] rounded-[20px] text-[12px]">Guest task</div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p className="text-[#767676]">21 Jul 2024 | 03:00 am</p>
                            </div>
                            <p className=" text-[#767676]"># 68988</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#767676] font-bold">From:Pantry</p>
                            <p className="text-[#767676] font-bold">To:Reception</p>
                        </div>
                        <div className="flex w-full mt-2">
                            <button className="bg-[#5F69C7] py-3 text-white rounded-full w-full">Notify Staff</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default TaskCard;