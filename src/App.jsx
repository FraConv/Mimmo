
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './assets/Components/Home';
import Raspberry from './assets/Components/Raspberry';
import Python from './assets/Components/Python';
import WebServerconRaspberry from './assets/Components/Web ServerconRaspberry';
import AccessoremotoaDBMySQL from './assets/Components/AccessoremotoaDBMySQL';



function App () {
  return (
    <>



<Router>

<Routes>

<Route path='/' element={<Home/>} />
<Route path='/Raspberry' element={<Raspberry/>} />
<Route path='/Python' element={<Python/>} />
<Route path='/Web Server con Raspberry' element={<WebServerconRaspberry/>} />
<Route path='/Accesso remoto a DBMySQL'element={<AccessoremotoaDBMySQL/>} />

</Routes>

</Router>



    </>
  );
};

export default App;