import { ReactComponent as Logo } from 'assets/logo.svg'
import style from './App.module.scss'
import Buscar from 'components/Buscar/Buscar'
import Filtro from 'components/Filtro/Filtro'
import { useState } from 'react';
import Ordenador from 'components/Ordenador/Ordenador';
import Itens from 'components/Itens/itens';

function App() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null)
  const [ordenador, setOrdenador] = useState('');
  return (
    <main>
      <nav className={style.menu}>
        <Logo /> Logo utilizada para fins didáticos
      </nav>
      <header className={style.header}>
        <div className={style.header__text}>
          React com Typescript
        </div>
      </header>

      <section className={style.cardapio}>
        <h3 className={style.cardapio__titulo}>Cardápio</h3>
        <Buscar busca={busca} setBusca={setBusca} />
        <div className={style.cardapio__filtros}>
        <Filtro filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
        </div>
        <Itens filtro={filtro} busca={busca} ordenador={ordenador} />
      </section> 
    </main>
  );
}

export default App;
