import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';
import Time from './components/Time';

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
      nome: 'Programação',
      cor: 'rgb(135, 174, 181)'
    },
    {
      nome: 'Front-End',
      cor: 'rgba(68, 116, 116, 0.6)'
    },
    {
      nome: 'Data Science',
      cor: 'rgba(138, 209, 16, 0.6)'
    },
    {
      nome: 'DevOps',
      cor: 'rgba(249, 26, 37, 0.6)'
    },
    {
      nome: 'UX e Design',
      cor: 'rgba(108, 71, 97, 0.6)'
    },
    {
      nome: 'Mobile',
      cor: 'rgba(192, 197, 32, 0.6)'
    },
    {
      nome: 'Inovação e Gestão',
      cor: 'rgba(31, 180, 255, 0.6)'
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

  function mudarCorTime(cor, nome) {
    setTimes(times.map(time => {

      if (time.nome === nome) {
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
