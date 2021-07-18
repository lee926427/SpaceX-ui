import {ReactNode,HTMLAttributes} from "react";

export interface NavigationProps extends HTMLAttributes<HTMLUListElement>{
    children: ReactNode
}
function Navigation({className,children}:NavigationProps){
    return(
         <ul className={className}>
             {children? children: null}
        </ul>
    )
}
export default Navigation