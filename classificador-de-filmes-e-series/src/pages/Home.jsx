import { useMemo, useState } from "react"
import {v4 as uuidv4} from 'uuid';
import Item from "../components/Item"
import banner from "../assets/movie-banner.png"
import atletasData from "../atletas.json"
import SearchBar from "../components/SearchBar"
import SubmitBar from "../components/SubmitBar"
import PersonIcon from "@mui/icons-material/Person";

export default function HomePage() {
  const [atletasList, setAtletasList] = useState(atletasData.atletas)
  const [queryNome, setQueryNome] = useState("")

  const filteredAtletasNome = useMemo(() => {
    return atletasList.filter(atelta => {
    return atelta.nome.toLowerCase().includes(queryNome.toLowerCase())
  })}, [atletasList, queryNome])

  const geraNovoAtleta = (nomeAtleta) => {
    return ({
      "id": uuidv4(),
      "nome": nomeAtleta,
      "idade": null,
      "altura": null,
      "pesos": null,
      "treinos": []
    })
  }

  const addAtleta = (newAtleta) => {
    setAtletasList(currentList =>
      [...currentList, geraNovoAtleta(newAtleta)]
  )}

  const deleteAtleta = (index) => {
    setAtletasList(currentList => 
      currentList.filter((_, i) => i !== index)
  )}

  return (
    <div className="esportistas-registrados">

      <section className="banner">
        <img src={banner} alt="Banner"/>
      </section>

      <section className="reference">
        <div className="reference--page">HOME</div>
      </section>

      <section className="container-add-search">
        <div className="container-search-bar">
          <SearchBar 
            textPlaceholder={"esportista"} 
            action={setQueryNome} 
            query={queryNome}
          />
        </div>
        <div className="container-submit-bar">
          <SubmitBar 
            textPlaceholder={"esportista"} 
            action={addAtleta}
          />
        </div>
      </section>

      <section className="main-athletes">
        {filteredAtletasNome.map((info, index) => (
          <Item 
            info={info}
            label={info.nome}
            IconComponent={PersonIcon}
            routeURL={`/esportista/${info.nome}`}
            key={index}
            deleteAction={() => deleteAtleta(index)}
          />
        ))}
      </section>

    </div>
  )
}