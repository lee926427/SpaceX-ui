import { ComponentType } from "react";
import { atom } from "recoil";

export interface RouteProps {
    path: string;
    name: string;
}
export interface NavigationItemProps {
    name: string;
    icon: string;
}

export interface TaskProps {
    taskName: string;
    state: number;
    phase: string;
}
export interface ItemStateProps {
    label: string;
    expected: number;
    value: number;
    unit: string;
}
export const routes = atom<RouteProps[]>({
    key: "ROUTES",
    default: [
        {
            path: "/",
            name: "ROCKET",
        },
        {
            path: "/MEMBER",
            name: "MEMBER",
        },
    ],
});
export const user = atom({
    key: "user",
    default: null,
});
export const rocketState = atom<ItemStateProps[]>({
    key: "ROCKET_STATUS",
    default: [
        {
            label: "Inertial Vetocity",
            expected: 10,
            value: 7.68,
            unit: "km/s",
        },
        {
            label: "Altitude",
            expected: 1800,
            value: 390.0,
            unit: "km",
        },
        {
            label: "Apogee",
            expected: 1000,
            value: 404.4,
            unit: "km",
        },
        {
            label: "Perigee",
            expected: 500,
            value: 389.4,
            unit: "km",
        },
    ],
});
export const otherState = atom<ItemStateProps[]>({
    key: "OTHER_STATUS",
    default: [
        {
            label: "Inclination",
            expected: 90,
            value: 51.67,
            unit: "°",
        },
        {
            label: "Range to 155",
            expected: 0.022,
            value: 0.02,
            unit: "km",
        },
    ],
});
export const tasks = atom<TaskProps[]>({
    key: "tasks",
    default: [
        {
            taskName: "ALL SYSTEM CHECK",
            state: 0,
            phase: "Normal",
        },
        {
            taskName: "RENDEZVOUS BURN SLOW",
            state: 0,
            phase: "Normal",
        },
        {
            taskName: "PREPARE RENDEZVOUS BURN",
            state: 0,
            phase: "Normal",
        },
        {
            taskName: "THERMAL SHIELD",
            state: 2,
            phase: "Applied",
        },
        {
            taskName: "BURN GO/NO-GO",
            state: 0,
            phase: "Normal",
        },
        {
            taskName: "POWER COMPLETION",
            state: 1,
            phase: "Awaiting",
        },
        {
            taskName: "STATION DECK CHECK",
            state: 0,
            phase: "Normal",
        },
    ],
});
