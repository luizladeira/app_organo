import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';
import Time from './components/Time';
import { v4 as uuidv4 } from 'uuid';


//Banner é um componente

function App() {


  /*
  OBS.: Para que a cor do background do TIME seja de acordo com o input os items não podem ser uma constante e sim uma state
  pois o react não consegue redenrizar a cor no background

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
  */

  //TRANSFORMANDO O ARRAY COM STATES
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#873b3b'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#447474'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#8ad110'
    },
    {
      id: uuidv4(),
      nome: 'DevOps',
      cor: '#f91a25'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#6c4761'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#c0c520'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#1fb4ff'
    },
  ]);



  const [colaboradores, setColaboradores] = useState([]) //LISTA DE COLABORES
  const aoNovoColaboradorAdd = (colaborador) => {
    //console.log(colaborador)
    //debugger - ele para a execução e mostra o que tá acontecendo
    setColaboradores([...colaboradores, colaborador]) // coloca os array antigo e insere o ultimo colaborador
  }

  function deletarColaborador() {
    console.log('Deletando Colaborador');
  }

  function mudarCorTime(cor, id) {
    setTimes(times.map(time => {

      if (time.id === id) {
        time.cor = cor;
      }
      console.log(time);
      return time;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdd(colaborador)} />
      {times.map((time, indice) =>
        <Time
          key={indice}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorTime}
        />
      )}
      <Rodape />
    </div>
  );
}

export default App;
