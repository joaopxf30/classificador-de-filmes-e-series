import { useMemo, useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import Item from "../components/Item"
import Button from "../components/Button";
import banner from "../assets/banner.png"
import SearchBar from "../components/SearchBar"
import SubmitBar from "../components/SubmitBar"
import TextField from "../components/TextField";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


export default function EsportistaPage() {
  const { state: { info: esportista } } = useLocation()
  const navigate = useNavigate()

  const [treinosList, setTreinosList] = useState(esportista.treinos)
  const [queryTreino, setQueryTreino] = useState("")
  
  const filteredTreino = useMemo(() => {
    return treinosList.filter(treino => {
    return treino.descricao.toLowerCase().includes(queryTreino.toLowerCase())
  })}, [treinosList, queryTreino])

  const routeBack = (routeURL) => {
    navigate(routeURL)
  }

  const geraNovoTreino = (descricaoTreino) => {
    return ({
      "id": uuidv4(),
      "descricao": descricaoTreino,
      "data": null,
      "esporte": null,
      "duracao": null,
      "calorias": null,
      "bpm": null
    })
  }

  const addTreino = (newTreino) => {
    setTreinosList(currentList =>
      [...currentList, geraNovoTreino(newTreino)]
  )}

  const deleteTreino = (index) => {
    setTreinosList(currentList => 
      currentList.filter((_, i) => i !== index)
  )}
    
  return (
    <div className="treinos-registrados">

      <section className="banner">
        <img src={banner} alt="Banner"/>
      </section>

      <section className="reference">
        <div className="reference--page">ESPORTISTA</div>
        <div className="rollback">
          <Button
            IconComponent={NavigateBeforeIcon}
            type="button"
            color="white"
            onClick={() => {routeBack("/")}}
            size="large"
          />
          <span>Voltar</span>
        </div>
      </section>

      <section className="information--container">
        <div className="information--main">
          <TextField 
            className="information--main--field" 
            id="textfield--input--nome"
            label="Nome" 
            value={esportista.nome}
          />
        </div>
        <div className="information--aux">
          <TextField
            className="information--aux--field" 
            id="textfield--input--idade" 
            label="Idade"
            value={esportista.idade}  
          />
          <TextField
            className="information--aux--field"  
            id="textfield--input--altura"
            label="Altura" 
            value={esportista.altura}
          />
          <TextField
            className="information--aux--field"  
            id="textfield--input--peso" 
            label="Peso"
            value={esportista.peso}
          />
        </div>
      </section>

      <section className="container-add-search">
        <div className="container-search-bar">
          <SearchBar 
            textPlaceholder={"treino"} 
            action={setQueryTreino} 
            query={queryTreino}
          />
        </div>
        <div className="container-submit-bar">
          <SubmitBar
            textPlaceholder={"treino"}
            action={addTreino}
          />
        </div>
      </section>

      <section className="main-treinos">
        {filteredTreino.map((info, index) => (
          <Item 
            info={info}
            complementInfo = {esportista}
            label={info.descricao} 
            IconComponent={FitnessCenterIcon}
            routeURL={`/esportista/${esportista.nome}/treino/${info.id}`}
            key={index}
            deleteAction={() => deleteTreino(index)} 
          />
        ))}
      </section>

    </div>
  )
}