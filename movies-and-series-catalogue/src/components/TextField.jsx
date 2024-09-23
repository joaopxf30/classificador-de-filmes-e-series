import { useState } from "react";
import Button from "./Button";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';


export default function TextField({ id, label, value }) {
  const [modoEdicao, setModoEdicao] = useState(false)
  const [valorInput, setValorInput] = useState(value)
  
  const encerraModoEdicao = () => {
    setModoEdicao(false)
  };

  const abreModoEdicao = () => {
    setModoEdicao(true)
  };

  const onEdicao = () => {
    encerraModoEdicao()
  };

  const mudaValor = (event) => {
    setValorInput(event.target.value)
  };

  return (   
    <div className="textfield">
      <div className="textfield--header">
        <label className="label--input" htmlFor={id}>{label}</label>
        { modoEdicao? (
          <div className="textfield--header-actions">
            <Button onClick={encerraModoEdicao} IconComponent={CloseIcon} color="white" size="inherit"/>
            <Button onClick={onEdicao} IconComponent={SaveIcon} color="white" size="inherit"/>
          </div>
        ) : (
          <div className="textfield--header-actions">
            <Button onClick={abreModoEdicao} IconComponent={EditIcon} color="white" size="inherit"/>
          </div>
        )}
      </div>
      <input 
        id={id} 
        className="textfield--input"
        value={valorInput} 
        readOnly={!modoEdicao}
        onChange={mudaValor} 
      />
    </div>
  )
  
}
