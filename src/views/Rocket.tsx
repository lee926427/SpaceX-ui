import { useState } from "react";
import { useRecoilValue } from "recoil";
import { tasks, rocketState, otherState } from "../store/atoms";
import clsx from "clsx";
import { AiFillCheckCircle } from "react-icons/ai";
import StatusProgress from "../components/organisms/StatusProgress";

function MainCharts() {
    return (
        <ul className="absolute w-screen flex flex-row justify-center">
            <li className=" w-40 h-40 rounded-md p-4 mx-2 opacity-25 bg-slate-700"></li>
            <li className=" w-40 h-40 rounded-md p-4 mx-2 opacity-25 bg-slate-700"></li>
            <li className=" w-40 h-40 rounded-md p-4 mx-2 opacity-25 bg-slate-700"></li>
            <li className=" w-40 h-40 rounded-md p-4 mx-2 opacity-25 bg-slate-700"></li>
        </ul>
    );
}
function SubCharts() {
    return (
        <div className="absolute top-44 w-screen flex justify-center">
            <div className="flex flex-row justify-around w-full max-w-5xl">
                <section className="flex flex-row gap-2">
                    <div className=" w-36 h-36 rounded-md p-4 mx-2 opacity-25 bg-slate-700"></div>
                    <div className=" w-36 h-36 rounded-md p-4 mx-2 opacity-25 bg-slate-700"></div>
                </section>
                <section className="flex flex-row gap-2">
                    <div className=" w-36 h-36 rounded-md p-4 mx-2 opacity-25 bg-slate-700"></div>
                    <div className=" w-36 h-36 rounded-md p-4 mx-2 opacity-25 bg-slate-700"></div>
                </section>
            </div>
        </div>
    );
}
function VehicleConnections() {
    return (
        <>
            <h2>CONNETCTIONS</h2>
            <hr className="my-2" />
            <ul className=" w-full">
                <li className="w-full flex justify-between">
                    <span>Manual rigs</span>{" "}
                    <span className=" text-blueGray-50">connected</span>
                </li>
                <li className="w-full flex justify-between">
                    <span>Changelog</span>{" "}
                    <span className=" text-blueGray-50">connected</span>
                </li>
                <li className="w-full flex justify-between">
                    <span>Airlock</span>{" "}
                    <span className=" text-blueGray-50">connected</span>
                </li>
                <li className="w-full flex justify-between">
                    <span>Wing</span>{" "}
                    <span className=" text-blueGray-50">connected</span>
                </li>
            </ul>
        </>
    );
}

function VehicleStatus() {
    return (
        <ul className="absolute top-1/2 transform -translate-y-16 w-screen flex flex-row justify-center text-blueGray-400">
            <li className=" w-64 rounded-md p-4 mx-2">
                <VehicleConnections />
            </li>
            <li className=" w-60 h-44 p-4 mx-2 "></li>
            <li className=" w-64 rounded-md  p-4 mx-2"></li>
        </ul>
    );
}

function View() {
    const taskList = useRecoilValue(tasks);
    const rocketStatus = useRecoilValue(rocketState);
    const otherStatus = useRecoilValue(otherState);
    const taskItems = taskList.map((item) => (
        <li className="flex-1 max-h-24 text-blueGray-400">
            <div className="task flex flex-1 justify-start">
                <span
                    className={clsx("taskState px-4", {
                        "text-orange-400": item.state === 1,
                        "text-green-500": item.state === 2,
                    })}
                >
                    <AiFillCheckCircle size="1.6rem" />
                </span>
                <div>
                    <div className="label text-md font-bold">
                        {item.taskName}
                    </div>
                    <span
                        className={clsx("taskState text-sm font-bold", {
                            "text-blueGray-100": item.state !== 0,
                            "text-blueGray-700": item.state === 0,
                        })}
                    >
                        {item.phase}
                    </span>
                </div>
            </div>
        </li>
    ));
    const [mode, setMode] = useState("SYSTEM");
    return (
        <div
            id="SystemContainer"
            className="h-full flex flex-row relative bg-[url(/src/assets/images/rocket.png)] bg-cover"
        >
            <aside className="h-full flex-auto flex flex-col justify-start pb-4 px-4 min-w-fit absolute left-0 z-10">
                <ul className="h-full flex flex-col">{taskItems}</ul>
                <div className="mt-auto p-1">
                    <button
                        className={clsx(
                            " font-bold border-2 rounded-l-lg px-8 py-2 text-slate-100  border-slate-100",
                            {
                                "text-slate-900 bg-slate-100 transform scale-105":
                                    mode === "SYSTEM",
                            }
                        )}
                        onClick={() => setMode("SYSTEM")}
                    >
                        SYSTEM
                    </button>
                    <button
                        className={clsx(
                            " font-bold border-2 rounded-r-lg px-8 py-2 text-slate-100  border-slate-100",
                            {
                                "text-slate-900 bg-slate-100 transform scale-105":
                                    mode === "CABIN",
                            }
                        )}
                        onClick={() => setMode("CABIN")}
                    >
                        CABIN
                    </button>
                </div>
            </aside>
            <main id="vehicleDashboard" className="h-full flex-full relative">
                <MainCharts />
                <SubCharts />
                <VehicleStatus />
                <div id="vehicle" className=" w-full h-full"></div>
            </main>
            <aside className="h-full flex-auto flex flex-col items-end justify-start pb-4 px-4 min-w-fit absolute right-0  z-10">
                <StatusProgress items={rocketStatus} />
                <StatusProgress items={otherStatus} />
                <div className="mt-auto">
                    <button className="mr-4 text-blueGray-100 font-bold bg-blueGray-900 bg-opacity-10 border-2 rounded-lg border-blueGray-100 px-8 py-4">
                        MORE
                    </button>
                </div>
            </aside>
        </div>
    );
}

export default View;
