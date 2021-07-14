import {atom} from "recoil";


export interface TaskProps{
    taskName:   string;
    state:      number;
    phase:      string;
}
export interface ItemStateProps{
    label: string
    expected: number,
    value: number,
    unit: string
}

export const user = atom({
    key: 'user',
    default: null
})
export const stateItems = atom<ItemStateProps[]>({
    key:"ROCKET_STATUS",
    default:[
        {
            label:"Inertial Vetocity",
            expected: 10,
            value: 7.68,
            unit: "km/s"
        },{
            label:"Altitude",
            expected: 1800,
            value: 390.0,
            unit: "km"
        },{
            label:"Apogee",
            expected: 1000,
            value: 404.4,
            unit: "km"
        },{
            label:"Perigee",
            expected: 500,
            value: 389.4,
            unit: "km"
        },
    ]
})
export const tasks = atom<TaskProps[]>({
    key: "tasks",
    default:[
        {
            taskName:   "ALL SYSTEM CHECK",
            state:      0,
            phase:      "Normal"
        },{
            taskName:   "RENDEZVOUS BURN SLOW",
            state:      0,
            phase:      "Normal"
        },{
            taskName:   "PREPARE RENDEZVOUS BURN",
            state:      0,
            phase:      "Normal"
        },{
            taskName:   "THERMAL SHIELD",
            state:      2,
            phase:      "Applied"
        },{
            taskName:   "BURN GO/NO-GO",
            state:      0,
            phase:      "Normal"
        },{
            taskName:   "POWER COMPLETION",
            state:      1,
            phase:      "Awaiting"
        },{
            taskName:   "STATION DECK CHECK",
            state:      0,
            phase:      "Normal"
        }
    ]
})
