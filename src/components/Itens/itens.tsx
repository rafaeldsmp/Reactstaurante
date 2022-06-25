import style from './itens.module.scss';
import cardapio from './itens.json';
import Item from './Item/item';
import { useEffect, useState } from 'react';

interface Props {
busca: string,
ordenador: string,
filtro: number|null,
}

export default function Itens(props: Props){
    const [lista, setLista] = useState(cardapio);
    const {busca, filtro, ordenador} = props;

    function testeBusca(title: string){
        const regex = new RegExp(busca, 'i');
        return regex.test(title);
    }

    function testeFiltro(id: number){
        if(filtro !== null){
            return filtro===id;
        }
        return true;
    }

    function ordenar(novaLista: typeof cardapio){
        switch(ordenador){
            case 'porcao':
                return novaLista.sort((a,b) => a.size > b.size ? 1 : -1);
                case 'qtd_pessoas':
                    return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1)
                case 'preco':
                    return novaLista.sort((a, b) => a.price > b.price ? 1 : -1)
                default: //no caso sera a string vazia
                    return novaLista;
        }
    }
    useEffect(() =>{
        const novaBusca = cardapio.filter(item => testeBusca(item.title) && testeFiltro(item.category.id));
        setLista(ordenar(novaBusca));
    },[busca, filtro, ordenador])
    return (
        <div className={style.itens}>
            {lista.map((item) => (
                <Item 
                key={item.id}
                {...item}
                />
            ))}
        </div>
    )
}