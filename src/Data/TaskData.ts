const TaskData = [
    {
        taskId: "68988",
        taskType: "Guest Task",
        taskStatus: "Scheduled",
        taskName: "Routine Cleaning",
        staffName:"Rajesh",
        tags:["Scheduled"],
        isScheduled:true,
        isRecurring:false,
        date: new Date(2024, 3, 10, 12, 30, 0),
        RequestDetails: {
            itemRequest:{},
            serviceRequest:["Room Cleaning","Bathroom Cleaning"],
            instructions:["Please thoroughly clean and tidy up the Room, including dusting, vacuuming, and making the bed."]
        },
        from:"Room 301",
        to:"Room 301",
        timeRemain:20,
        isCompleted:false
    },
    {
        taskId: "68989",
        taskType: "Guest Task",
        taskStatus: "Not Accepted",
        taskName: "Items Request",
        staffName:"Ganesh",
        tags:["Not Accepted"],
        isScheduled:false,
        isRecurring:false,
        date: new Date(2024, 3, 10, 10, 30, 0),
        RequestDetails: {
            itemRequest:{
                Shampoo:1,
                Conditioner:2,
                Towel:1
            },
            serviceRequest:[],
            instructions:["Please provide towels with smooth material."]
        },
        from:"Item Store",
        to:"Room 301",
        timeRemain:-5,
        isCompleted:false
    },
    {
        taskId: "68989",
        taskType: "Internal Task",
        taskStatus: "Ongoing",
        taskName: "Routine Cleaning",
        staffName:"Prakash",
        tags:["Scheduled"],
        isScheduled:true,
        isRecurring:true,
        date: new Date(2024, 3, 10, 13, 45, 0),
        RequestDetails: {
            itemRequest:{},
            serviceRequest:["Floor Cleaning"],
            instructions:["Sweep or vacuum the floor to remove any loose dirt, dust, or debris."]
        },
        from:"Pantry",
        to:"Reception",
        timeRemain:0,
        isCompleted:false
    },
    {
        taskId: "68988",
        taskType: "Guest Task",
        taskStatus: "Scheduled",
        taskName: "Routine Cleaning",
        staffName:"Rajesh",
        tags:["Scheduled"],
        isScheduled:true,
        isRecurring:false,
        date: new Date(2024, 3, 10, 12, 30, 0),
        RequestDetails: {
            itemRequest:{},
            serviceRequest:["Room Cleaning","Bathroom Cleaning"],
            instructions:["Please thoroughly clean and tidy up the Room, including dusting, vacuuming, and making the bed."]
        },
        from:"Room 301",
        to:"Room 301",
        timeRemain:20,
        isCompleted:false
    },
    {
        taskId: "68989",
        taskType: "Guest Task",
        taskStatus: "Not Accepted",
        taskName: "Items Request",
        staffName:"Ganesh",
        tags:["Not Accepted"],
        isScheduled:false,
        isRecurring:false,
        date: new Date(2024, 3, 10, 10, 30, 0),
        RequestDetails: {
            itemRequest:{
                Shampoo:1,
                Conditioner:2,
                Towel:1
            },
            serviceRequest:[],
            instructions:["Please provide towels with smooth material."]
        },
        from:"Item Store",
        to:"Room 301",
        timeRemain:-5,
        isCompleted:false
    },
    {
        taskId: "68989",
        taskType: "Internal Task",
        taskStatus: "Ongoing",
        taskName: "Routine Cleaning",
        staffName:"Prakash",
        tags:["Scheduled"],
        isScheduled:true,
        isRecurring:true,
        date: new Date(2024, 3, 10, 13, 45, 0),
        RequestDetails: {
            itemRequest:{},
            serviceRequest:["Floor Cleaning"],
            instructions:["Sweep or vacuum the floor to remove any loose dirt, dust, or debris."]
        },
        from:"Pantry",
        to:"Reception",
        timeRemain:0,
        isCompleted:false
    },
    {
        taskId: "68989",
        taskType: "Guest Task",
        taskStatus: "Not Accepted",
        taskName: "Items Request",
        staffName:"Ganesh",
        tags:["Not Accepted"],
        isScheduled:false,
        isRecurring:false,
        date: new Date(2024, 3, 10, 10, 30, 0),
        RequestDetails: {
            itemRequest:{
                Shampoo:1,
                Conditioner:2,
                Towel:1
            },
            serviceRequest:[],
            instructions:["Please provide towels with smooth material."]
        },
        from:"Item Store",
        to:"Room 301",
        timeRemain:-5,
        isCompleted:false
    },
    {
        taskId: "68989",
        taskType: "Internal Task",
        taskStatus: "Ongoing",
        taskName: "Routine Cleaning",
        staffName:"Prakash",
        tags:["Scheduled"],
        isScheduled:true,
        isRecurring:true,
        date: new Date(2024, 3, 10, 13, 45, 0),
        RequestDetails: {
            itemRequest:{},
            serviceRequest:["Floor Cleaning"],
            instructions:["Sweep or vacuum the floor to remove any loose dirt, dust, or debris."]
        },
        from:"Pantry",
        to:"Reception",
        timeRemain:0,
        isCompleted:false
    },
]

export default TaskData