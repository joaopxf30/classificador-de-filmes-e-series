import { useMemo, useState, useEffect } from "react"
import { getAudiovisuals, addAudiovisual, removeAudiovisual } from "../api/Audiovisual";
import Item from "../components/Item"
import banner from "../assets/movie-banner.png"
import SearchBar from "../components/SearchBar"
import SubmitBar from "../components/SubmitBar"
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';


export default function HomePage() {
  const [audiovisualList, setAudiovisualList] = useState([]);
  const [queryTitle, setQueryTitle] = useState("");

  useEffect(() => {
    getAudiovisuals()
      .then(audiovisuals => {
        setAudiovisualList(audiovisuals)
      }
  )}, [])

  const addAudiovisualItem = async(imdbId, title, year) => {
    addAudiovisual(imdbId, title, year)
      .then(audiovisual => {
        setAudiovisualList(currentList => [...currentList, audiovisual])
  })}

  const removeAudiovisualItem = (index, id) => {
    removeAudiovisual(id)
    setAudiovisualList(currentList => 
      currentList.filter((_, i) => i !== index)
  )}

  const filteredAudiovisualList = useMemo(() => {
    return audiovisualList.filter(audiovisual => {
    return audiovisual.title.toLowerCase().includes(queryTitle.toLowerCase())
  })}, [audiovisualList, queryTitle])

  return (
    <div className="audiovisuals">

      <section className="banner">
        <img src={banner} alt="Banner"/>
      </section>

      <section className="reference">
        <div className="reference--page">HOME</div>
      </section>

      <section className="container-add-search">
        <div className="container-search-bar">
          <SearchBar 
            textPlaceholder={"movie or series"} 
            action={setQueryTitle} 
            query={queryTitle}
          />
        </div>
        <div className="container-submit-bar">
          <SubmitBar 
            action={addAudiovisualItem}
          />
        </div>
      </section>

      <section className="watched-audiovisuals">
        {filteredAudiovisualList.map((info, index) => (
          <Item 
            info={info}
            label={`${info.title} (${info.year})`}
            IconComponent={LocalMoviesIcon}
            routeURL={`/audiovisual/${info.id}`}
            key={index}
            removeAction={() => removeAudiovisualItem(index, info.id)}
          />
        ))}
      </section>

    </div>
  )
}