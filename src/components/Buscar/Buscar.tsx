
import { CgSearch } from 'react-icons/cg';
import style from './Buscador.module.scss'
interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}
export default function Buscar({busca, setBusca}:Props){
    return(
        <div className={style.buscador}>
        <input  
            value={busca}
            onChange={evento=>setBusca(evento.target.value)}
        />
        <CgSearch
            size={20}
            color="#4C4D5E" /> 
    </div>
    )
}