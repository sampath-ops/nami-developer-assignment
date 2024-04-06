const TaskData = [
    {
        taskId: "68988",
        taskType: "Guest Task",
        taskStatus: "Scheduled",
        taskName: "Routine Cleaning",
        staffName:"Rajesh",
        tags:["Scheduled"],
        rating:0,
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
        rating:0,
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
        taskId: "68990",
        taskType: "Internal Task",
        taskStatus: "Ongoing",
        taskName: "Routine Cleaning",
        staffName:"Prakash",
        tags:["Ongoing"],
        rating:0,
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
        taskId: "68991",
        taskType: "Guest Task",
        taskStatus: "Completed",
        taskName: "Items Request",
        staffName:"Bala",
        tags:["On - Time","Completed"],
        rating:5,
        isScheduled:true,
        isRecurring:false,
        date: new Date(2024, 3, 12, 13, 30, 0),
        RequestDetails: {
            itemRequest:{},
            serviceRequest:["Bed Making","Bathroom Cleaning"],
            instructions:["Please thoroughly clean and tidy up the Room, including dusting, vacuuming, and making the bed."]
        },
        from:"Room 303",
        to:"Room 303",
        timeRemain:0,
        isCompleted:true
    },
    {
        taskId: "68992",
        taskType: "Internal Task",
        taskStatus: "Completed",
        taskName: "Routine Cleaning",
        staffName:"Vishnu",
        tags:["Delayed","Complaint","Completed"],
        rating:2,
        isScheduled:true,
        isRecurring:false,
        date: new Date(2024, 3, 12, 8, 30, 0),
        RequestDetails: {
            itemRequest:{},
            serviceRequest:["Clean the floor"],
            instructions:["Please double clean the floors"]
        },
        from:"Reception",
        to:"Pantry",
        timeRemain:0,
        isCompleted:true
    },
    {
        taskId: "68989",
        taskType: "Internal Task",
        taskStatus: "Scheduled",
        taskName: "Service Request",
        staffName:"Surya",
        tags:["Scheduled"],
        rating:5,
        isScheduled:true,
        isRecurring:true,
        date: new Date(2024, 3, 9, 14, 0, 0),
        RequestDetails: {
            itemRequest:{},
            serviceRequest:["Ground Floor Cleaning"],
            instructions:["Sweep or vacuum the floor to remove any loose dirt, dust, or debris."]
        },
        from:"Entrance",
        to:"Reception",
        timeRemain:10,
        isCompleted:false
    },
    {
        taskId: "68993",
        taskType: "Internal Task",
        taskStatus: "Scheduled",
        taskName: "Routine Cleaning",
        staffName:"Ganesh",
        tags:["Scheduled"],
        rating:5,
        isScheduled:true,
        isRecurring:true,
        date: new Date(2024, 3, 10, 10, 30, 0),
        RequestDetails: {
            itemRequest:{},
            serviceRequest:["Clean the floor"],
            instructions:["Use a damp mop to clean the floor thoroughly."]
        },
        from:"Reception",
        to:"Pantry",
        timeRemain:5,
        isCompleted:false
    },
    {
        taskId: "68994",
        taskType: "Internal Task",
        taskStatus: "Ongoing",
        taskName: "Routine Cleaning",
        staffName:"Prakash",
        tags:["Ongoing"],
        rating:5,
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
        taskId: "68995",
        taskType: "Internal Task",
        taskStatus: "Not Accepted",
        taskName: "Item Request",
        staffName:"Jeeva",
        tags:["Not Accepted"],
        rating:5,
        isScheduled:true,
        isRecurring:true,
        date: new Date(2024, 3, 8, 8, 30, 0),
        RequestDetails: {
            itemRequest:{
                Soap:1,
                FaceWash:1,
                FaceMask:1
            },
            serviceRequest:[],
            instructions:["Sweep or vacuum the floor to remove any loose dirt, dust, or debris."]
        },
        from:"Pantry",
        to:"Reception",
        timeRemain:-20,
        isCompleted:false
    },
]

export default TaskData