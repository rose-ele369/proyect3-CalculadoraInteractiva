import './App.css';
import logoC from './imagenes/logo_conejo2.png'
import Boton from './componentes/Boton';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          src={logoC}
          className='logo'
          alt='logo principal' />
      </div>

      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
          
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'>
          <Boton>Clear</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
