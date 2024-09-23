import { IconButton } from "@mui/material";

export default function Button({ IconComponent, type, onClick, size, color }) {

    return (
        <IconButton 
            type={type} 
            onClick={onClick} 
            size="small">
            <IconComponent fontSize={size} style={{ color: color }}/>
        </IconButton>
    )

}