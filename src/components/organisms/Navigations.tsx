import {ReactNode,HTMLAttributes} from "react";

export interface NavigationProps extends HTMLAttributes<HTMLUListElement>{
    children: ReactNode
}
function Navigation({id,className,children}:NavigationProps){
    return(
         <ul id={id} className={className}>
             {children? children: null}
        </ul>
    )
}
export default Navigation