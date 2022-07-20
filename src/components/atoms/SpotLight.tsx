import {HTMLAttributes} from "react";
interface SpotLightProps extends HTMLAttributes<HTMLDivElement>{
    size?: string;
    gradient?: string;
    transform?: string;
}
function SpotLight({id,className,transform,size,gradient}:SpotLightProps){
    return(
        <div
            id={id}
            className={className}
            style={{
                width:size ? size : "100%",
                height:size ? size : "100%",
                background: gradient ? gradient : "radial-gradient(#e66465, #9198e5)",
                position: "absolute",
                transform: transform ? transform : "translateY(160px) rotateX(64deg)",
            }
        }>
            
        </div>
    )
}
export default SpotLight;