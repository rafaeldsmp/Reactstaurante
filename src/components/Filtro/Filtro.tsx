import filtros from './filtros.json';
import style from './Filtros.module.scss';

type IOpcao = typeof filtros[0];

interface Props {
    filtro: null | number;
    setFiltro:  React.Dispatch<React.SetStateAction<number | null>>
}
export default function Filtro({filtro, setFiltro} : Props) {
    function selecionaFiltro(opcao: IOpcao){
        if(opcao.id === filtro){
            return setFiltro(null)
        }
        return setFiltro(opcao.id)
    }
    return (
        <div className={style.filtros}>
           {filtros.map((opcao) => (
            <button
            className={`${style.filtros__filtro} ${opcao.id === filtro ? style['filtros__filtro--ativo'] : ''}`}
            onClick={()=>selecionaFiltro(opcao)}
            >
                {opcao.label}

            </button>
           ))}          
        </div>
    )
}