import { useRef } from "react"
import Button from "./Button"
import PersonAddIcon from '@mui/icons-material/PersonAddAltSharp';

export default function SubmitBar({ textPlaceholder, action }) {
  const inputReference = useRef()

  function onSubmit(e) {
    e.preventDefault()
    const newItem = inputReference.current.value
      if (newItem === "") return
      action(newItem)
      inputReference.current.value = ""
  }

  return (
    <section className="submit-bar">
      <form onSubmit={onSubmit} className="submit-form">
        <input ref={inputReference} placeholder={`Adiciona um ${textPlaceholder}...`} className="submit-input"/>
          <Button IconComponent={PersonAddIcon} type="submit" color="black" id="submit-button" size="inherit"/>
      </form>
    </section>
  )
  
}