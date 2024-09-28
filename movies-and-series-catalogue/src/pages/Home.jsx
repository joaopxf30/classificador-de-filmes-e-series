import { useMemo, useState, useEffect } from "react"
import { getAudiovisuals, addAudiovisual, removeAudiovisual } from "../api/Audiovisual";
import Item from "../components/Item"
import banner from "../assets/movie-banner.png"
import SearchBar from "../components/SearchBar"
import SubmitBar from "../components/SubmitBar"
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';


export default function HomePage() {
  const [audiovisualList, setAudiovisualList] = useState([]);
  const [queryTitle, setQueryTitle] = useState("");
  
  useEffect(() => {
    getAudiovisuals()
      .then((audiovisuals) => {
        setAudiovisualList(audiovisuals)
      })
      .catch((error) => {
        console.error("Error:", error)
      });
  }, [])

  const addAudiovisualItem = async(imdbId, title, year) => {
    addAudiovisual(imdbId, title, year)
      .then((audiovisual) => {
        setAudiovisualList(currentList => [...currentList, audiovisual])
      })
      .catch((error) => {
        alert(error.message);
      })
  }

  const removeAudiovisualItem = (id) => {
    removeAudiovisual(id)
    setAudiovisualList(currentList => 
      currentList.filter(item => item.id !== id)
  )}

  const updateNewRating = (id, rating) => {
    setAudiovisualList((currentList) => 
      currentList.map((item) =>
        item.id === id ? { ...item, rating: rating } : item
      )
    )
  }

  const filteredAudiovisualList = useMemo(() => {
    return audiovisualList.filter(audiovisual => {
    return audiovisual.title.toLowerCase().includes(queryTitle.toLowerCase())
  })}, [audiovisualList, queryTitle])

  const useSpecificIcon = (type) => {
    return type === "movie" ? LocalMoviesIcon : LiveTvIcon;
  }

  return (
    <div className="home-page">
      
      <section className="banner">
        <img src={banner} alt="Banner"/>
      </section>

      <section className="reference">
        <div className="reference-home">HOME</div>
      </section>

      <section className="container-search-submit">
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

      {filteredAudiovisualList.length > 0 ? (
        <section className="watched-audiovisuals">
          {filteredAudiovisualList.map((info) => (
            <Item 
              info={info}
              label={`${info.title} (${info.year})`}
              IconComponent={useSpecificIcon(info.type)}
              routeURL={`/audiovisual/${info.id}`}
              updateNewRating={updateNewRating}
              key={info.id}
              removeItem={() => removeAudiovisualItem(info.id)}
            />
          ))}
        </section>
      ) : (
        <section className="empty-audiovisuals">
          <div>There are no movies or series!</div>
        </section>
      )}
      
    </div>
  )
}