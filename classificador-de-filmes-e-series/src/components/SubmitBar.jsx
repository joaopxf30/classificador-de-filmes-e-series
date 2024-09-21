import { useRef } from "react"
import Button from "./Button"
import PersonAddIcon from '@mui/icons-material/PersonAddAltSharp';

export default function SubmitBar( { action } ) {
  const inputImdbId = useRef()
  const inputTitle = useRef()
  const inputYear = useRef()

  function onSubmit(e) {
    e.preventDefault()
    const imdbId = inputImdbId.current.value
    const title = inputTitle.current.value
    const year = inputYear.current.value

    if (imdbId === "" && title === "") return

    action(imdbId, title, year)
    inputImdbId.current.value = ""
    inputTitle.current.value = ""
    inputYear.current.value = ""
  }

  return (
    <section className="submit-bar">
      <form onSubmit={onSubmit} className="submit-form">
        <input ref={inputImdbId} placeholder={"IMDb Id..."} className="imdb-id-input"/>
        <input ref={inputTitle} placeholder={"Title..."} className="title-input"/>
        <input ref={inputYear} placeholder={"Year..."} className="year-input"/>
          <Button IconComponent={PersonAddIcon} type="submit" color="black" id="submit-button" size="inherit"/>
      </form>
    </section>
  )
  
}