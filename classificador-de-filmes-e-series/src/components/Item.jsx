import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from '@mui/icons-material/Delete';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Button from "./Button";


export default function Item({ info, complementInfo, label, IconComponent, routeURL, deleteAction }) {
  const navigate = useNavigate()

  const navigateAction = () => {
    navigate(routeURL, { 
      state: {
        info: info,
        complementInfo: complementInfo
      }
    })
  }

  return (
    <div className="item-name">
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <IconComponent/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={label} />
        <Button
          IconComponent={DeleteIcon}
          type={"button"}
          color="white"
          size="medium"
          onClick={deleteAction}
        />
        <Button
          IconComponent={NavigateNextIcon} 
          type="button"
          color="white"
          size="large"
          onClick={navigateAction}
        /> 
      </ListItem>
    </div>
  )

}