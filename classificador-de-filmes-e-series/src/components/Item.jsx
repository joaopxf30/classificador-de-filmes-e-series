import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from '@mui/icons-material/Delete';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Button from "./Button";
import StarRating from "./StarRating";
import { useState, useEffect } from "react";
import { addRating, changeRating, removeRating } from "../api/Rating";


export default function Item({ info, complementInfo, label, IconComponent, routeURL, removeItem }) {
  const [rating, setRating] = useState(info.rating)
  const navigate = useNavigate()

  useEffect (() => {
    if (rating == null) {
      addRating(info.id, rating)
    }
    else {
      changeRating(info.id, rating)
    }
  }, [rating])

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
        <StarRating 
          value={rating}
          setRating={setRating}
        />
        <Button
          IconComponent={DeleteIcon}
          type={"button"}
          color="white"
          size="medium"
          onClick={removeItem}
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
  );
}