import {ItemStateProps} from "../../store/atoms";
import ProgressBar from "@ramonak/react-progress-bar";
export interface ItemProgressProps{
    items:ItemStateProps[]
}

function StatusProgress({items}:ItemProgressProps){
    const progress = items.map((item)=>(
        <li className="flex-1 max-h-24 text-blueGray-100" key={item.label}>
            <div className="flex flex-1 justify-start">
                <div className=" flex-full">
                    <div className="label text-xs font-bold">{item.label}</div>
                    <div className="progressBar text-sm font-bold w-full min-w-full px-4 py-2">
                        <ProgressBar 
                            isLabelVisible={false}
                            baseBgColor="#374151"
                            bgColor="#60A5FA"
                            height="5px"
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
    return(
        <ul  className="w-full h-full flex flex-col py-2">
            {progress}
        </ul>
    )
}
export default StatusProgress;