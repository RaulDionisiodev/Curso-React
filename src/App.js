import React from 'react';

//import Main from './Pages/Main/'
import './styles.css';

import Header from './Components/Header/index'
import Routes from './Routes';

//Stateless component

const App = () =>(
  <div className='App' >
    <Header />
    <Routes />
  </div>
);

/* Contrução de componente com classe
function App() {
  return (
    <div className="App">
     <h1>Hello React</h1>
    </div>
  );
}*/

export default App;
