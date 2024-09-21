import { useLocation } from 'react-router-dom';


export default function AudiovisualPage() {
  const { state: { info: audiovisual } } = useLocation() 

  return (
    <>Hi!</>
  )
}