import { useLocation, useNavigate } from 'react-router-dom';
import banner from "../assets/movie-banner.png"
import Button from "../components/Button";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


export default function AudiovisualPage() {
  const { state: { info: audiovisual } } = useLocation() 
  const navigate = useNavigate()

  const routeBack = (routeURL) => {
    navigate(routeURL)
  }

  return (
    <div className="audiovisual-page">

      <section className="banner">
        <img src={banner} alt="Banner"/>
      </section>

      <section className="reference">
        <div className="reference-audiovisual">
          {audiovisual.title} ({audiovisual.year})
        </div>
        <div className="rollback">
          <Button
            IconComponent={NavigateBeforeIcon}
            type="button"
            color="white"
            onClick={() => {routeBack("/")}}
            size="large"
          />
          <span>Return</span>
        </div>
      </section>
      <section className="container-information">
      {audiovisual.genre && (
        <div className="information">
          <b>Genre</b>: {audiovisual.genre}
        </div>
      )}
      {audiovisual.plot && (
        <div className="information">
          <b>Plot</b>: {audiovisual.plot}
        </div>
      )}
      {audiovisual.actors && (
        <div className="information">
          <b>Actors</b>: {audiovisual.actors}
        </div>
      )}
      {audiovisual.director && (
        <div className="information">
          <b>Director</b>: {audiovisual.director}
        </div>
      )}
      {audiovisual.runtime && (
        <div className="information">
          <b>Runtime</b>: {audiovisual.runtime}
        </div>
      )}
      </section>
    </div>
  )
}