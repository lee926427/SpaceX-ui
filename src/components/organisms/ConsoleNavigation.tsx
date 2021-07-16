import {NavigationItemProps} from "../../store/atoms"


export interface NavigationProps{
    items: NavigationItemProps[]
}

function Navigation({items}:NavigationProps){
    
    return(
        <nav>
            <ul>{}</ul>
        </nav>
    )
}
export default Navigation;