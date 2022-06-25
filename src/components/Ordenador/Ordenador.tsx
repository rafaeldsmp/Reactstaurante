import { useState } from 'react';
import opcoes from './opcoes.json';
import classNames from 'classnames';
import style from './Ordenador.module.scss';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
interface Props{
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({ordenador, setOrdenador} : Props) {
    const [aberto, setAberto] = useState(false);
    const nomeOrdenador= ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome;
    return (
        <button className={
            classNames({
                [style.ordenador]: true,
                
            })}
            onClick={()=> setAberto(!aberto)}
            onBlur={()=> setAberto(false)}
        >
            <span>{nomeOrdenador || "Ordenar Por:"}</span>
            {aberto ? < MdKeyboardArrowUp size={20}/> : < MdKeyboardArrowDown size={20}/>}
            <div className={classNames({
                [style.ordenador__options]: true,
                [style['ordenador__options--ativo']]: aberto
            })}>{opcoes.map((opcao) => (
                <div className={classNames({
                    [style.ordenador__option]: true,
                })}
                onClick={()=>setOrdenador(opcao.value)}
                >{opcao.nome}
                </div>
            ))}
            </div>
        </button>
    )
}