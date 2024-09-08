import banner from "../assets/banner.png"
import { useNavigate, useLocation } from 'react-router-dom';
import TextField from "../components/TextField";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Button from "../components/Button";

export default function TreinoPage() {
  const { state: { complementInfo: esportista, info: treino } } = useLocation()
  const navigate = useNavigate()

  const routeBack = (routeURL) => {
    navigate(routeURL, { state: { info: esportista } })
  }

  return (    
    <div className="treino">

      <section className="banner">
          <img src={banner} alt="Banner"/>
      </section>

      <section className="reference">
        <div className="reference--page">TREINO</div>
        <div className="rollback">
          <Button
            IconComponent={NavigateBeforeIcon}
            type="button"
            color="white"
            onClick={() => {routeBack(`/esportista/${treino.esportista}`)}}
            size="large"
          />
          <span>Voltar</span>
        </div>
      </section>

      <section className="information--container" id="information--container--treino">
        <div className="information--main">
          <TextField 
            className="information--main--field" 
            id="textfield--input--descricao"
            label="Treino" 
            value={treino.descricao}
          />
        </div>
        <div className="information--aux">
          <TextField
            className="information--aux--field" 
            id="textfield--input--esporte" 
            label="Esporte"
            value={treino.esporte}  
          />
          <TextField
            className="information--aux--field"  
            id="textfield--input--data"
            label="Data" 
            value={treino.data}
          />
        </div>
        <div className="information--aux">
          <TextField
            className="information--aux--field" 
            id="textfield--input--duracao" 
            label="Duração"
            value={treino.duracao}  
          />
          <TextField
            className="information--aux--field"  
            id="textfield--input--calorias"
            label="Calorias" 
            value={treino.calorias}
          />
          <TextField
            className="information--aux--field"  
            id="textfield--input--bpm"
            label="Bpm" 
            value={treino.bpm}
          />
        </div>
      </section>

      <footer className="footer--treino"></footer>

    </div>
  )
}