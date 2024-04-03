import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import Registration from './components/Registration';
import { Typography } from '@mui/material';
// import Navbarfile from './components/Navbarfile';
import { Route, Routes } from 'react-router-dom';
import Navbarfile from './components/Navbarfile';
import Statebasics from './components/Statebasics';
import Counter from './components/Counter';
import UseE from './components/UseE';
import Veiwdata from './components/Veiwdata';

function App() {
  return (
    <div className="App">
       {/*<Navbarfile/>
      <Routes>
        <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Registration/>}/>
  </Routes>*/}
      {/* <Statebasics/> */}
     {/*} <Counter/>
      <UseE/>*/}
      <Veiwdata/>
    </div>
  );
}

export default App;
