import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';
import Time from './components/Time';
//Banner é um componente

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#95FFD4',
      corSegundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSegundaria: '#E8FFFF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSegundaria: '#F0F8E2'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSegundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSegundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFEE0F',
      corSegundaria: '#FEFFE1'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSegundaria: 'rgba(255, 140, 42, 0.15)'
    },
  ]

  const [colaboradores, setColaboradores] = useState([]) //LISTA DE COLABORES
  const aoNovoColaboradorAdd = (colaborador) => {
    //console.log(colaborador)
    //debugger - ele para a execução e mostra o que tá acontecendo
    setColaboradores([...colaboradores, colaborador]) // coloca os array antigo e insere o ultimo colaborador
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdd(colaborador)} />
      {times.map((time,indice) =>
        <Time
          key={indice}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      )}
      <Rodape />
    </div>
  );
}

export default App;
