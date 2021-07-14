import {useRecoilValue} from "recoil";
import {tasks,stateItems} from "../store/atoms"
import classNames from "classnames";
import { AiFillCheckCircle } from "react-icons/ai";
import ProgressBar from "@ramonak/react-progress-bar";

function Home(){
    const taskList = useRecoilValue(tasks);
    const status = useRecoilValue(stateItems);
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
    const statusItems = status.map((item)=>(
        <li className="flex-1 max-h-24 text-blueGray-100">
            <div className="flex flex-1 justify-start">
                <div className=" flex-full">
                    <div className="label text-xs font-bold">{item.label}</div>
                    <div className="progressBar text-sm font-bold w-full min-w-full px-4 py-2">
                        <ProgressBar 
                            isLabelVisible={false}
                            baseBgColor="#374151"
                            bgColor="#60A5FA"
                            height="4px"
                            width="160px"
                            completed={((item.value/item.expected)*100).toFixed(2)}
                        />
                    </div>
                </div>
                <span className="flex-auto p-4 text-md font-bold">
                    <span className="value max-w-lg">{item.value}</span>
                    <span className="unit pl-1">{item.unit}</span>
                </span>
            </div>
        </li>
    ))
    return (
        <div id="home" className="h-full flex flex-row">
            <aside className="h-full flex-auto flex flex-col justify-start pb-4 pl-4">
                <ul className="h-full flex flex-col">
                    {taskItems}
                </ul>
                <div className="mt-auto">
                    <button className={classNames(
                        " font-bold border-2 rounded-l-lg px-8 py-2 ",
                        {
                            "text-blueGray-100 bg-blueGray-900 border-blueGray-100 bg-opacity-10":false,
                            "text-blueGray-900 bg-blueGray-100": true
                        }
                    )}>SYSTEMS</button>
                    <button className={classNames(
                        "font-bold border-2 rounded-r-lg px-8 py-2",
                        {
                            "text-blueGray-100 bg-blueGray-900 border-blueGray-100 bg-opacity-10":true,
                            "text-blueGray-900 bg-blueGray-100": false
                        }
                    )}>CABIN</button>
                </div>
            </aside>
            <main className="h-full flex-1">

            </main>
            <aside className="h-full flex-auto flex flex-col items-end justify-start pb-4 pr-4">
                <ul className="h-full flex flex-col">
                    {statusItems}
                 </ul>
                <div className="mt-auto">
                    <button className="mr-12 text-blueGray-100 font-bold bg-blueGray-900 bg-opacity-10 border-2 rounded-lg border-blueGray-100 px-8 py-4">MORE</button>
                </div>
            </aside>
        </div>
    )
}

export default Home;