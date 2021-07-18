import {useState} from 'react';
import {useRecoilValue} from "recoil";
import {tasks,rocketState,otherState} from "../store/atoms"
import classNames from "classnames";
import { AiFillCheckCircle } from "react-icons/ai";
import StatusProgress from "../components/organisms/StatusProgress";
import SpotLight from "../components/atoms/SpotLight";


function View(){
    const taskList = useRecoilValue(tasks);
    const rocketStatus = useRecoilValue(rocketState);
    const otherStatus = useRecoilValue(otherState);
    const taskItems = taskList.map((item)=>(
        <li className="flex-1 max-h-24 text-blueGray-400">
            <div className="task flex flex-1 justify-start">
                <span className={classNames(
                    "taskState px-4",
                    {
                       "text-orange-400": item.state === 1,
                       "text-green-500": item.state === 2
                    }
                )}>
                    <AiFillCheckCircle size="1.6rem"/>
                </span>
                <div>
                    <div className="label text-md font-bold">{item.taskName}</div>
                    <span className={classNames(
                        "taskState text-sm font-bold",
                        {
                            "text-blueGray-100": item.state !== 0,
                            "text-blueGray-700": item.state === 0
                        }
                    )}>{item.phase}</span>
                </div>
            </div>
        </li>
    ))
    const [mode,setMode] = useState("SYSTEM");
    return (
        <div id="System" className="h-full flex flex-row">
            <aside className="h-full flex-auto flex flex-col justify-start pb-4 px-4 min-w-fit">
                <ul className="h-full flex flex-col">
                    {taskItems}
                </ul>
                <div className="mt-auto p-1">
                    <button 
                        className={classNames(
                            " font-bold border-2 rounded-l-lg px-8 py-2 ",
                            {
                                "text-blueGray-100 bg-blueGray-900 border-blueGray-100 bg-opacity-10": mode !== "SYSTEM",
                                "text-blueGray-900 bg-blueGray-100 transform scale-105": mode === "SYSTEM"
                            } 
                        )} 
                        onClick={()=>setMode("SYSTEM")}
                    >
                        SYSTEM
                    </button>
                    <button 
                        className={classNames(
                            " font-bold border-2 rounded-r-lg px-8 py-2 ",
                            {
                                "text-blueGray-100 bg-blueGray-900 border-blueGray-100 bg-opacity-10": mode !== "CABIN",
                                "text-blueGray-900 bg-blueGray-100 transform scale-105": mode === "CABIN"
                            } 
                        )} 
                        onClick={()=>setMode("CABIN")}
                    >
                        CABIN
                    </button>
                </div>
            </aside>
            <main className="h-full flex-full relative">
                <SpotLight 
                    gradient="radial-gradient(#F9FAFB 0%,#F9FAFB 1%,#6B7280 26%,#111827 66%, #111827 96%)"
                    transform="translateY(220px) rotateX(64deg)"
                />
            </main>
            <aside className="h-full flex-auto flex flex-col items-end justify-start pb-4 px-4 min-w-fit">
                <StatusProgress items={rocketStatus}/>
                <StatusProgress items={otherStatus}/>
                <div className="mt-auto">
                    <button className="mr-4 text-blueGray-100 font-bold bg-blueGray-900 bg-opacity-10 border-2 rounded-lg border-blueGray-100 px-8 py-4">MORE</button>
                </div>
            </aside>
        </div>
    )
}

export default View;