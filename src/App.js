import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Errorpage from "./components/Errorpage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Visualization from './components/Visualization'
import Highlights from './components/Highlights'
import { Globalstyles } from './components/styles/GlobalStyles';
import Footer from './components/Footer';
import { AppContext } from './components/AppContext/Appcontext';
import { useState } from 'react';

function App() {
  const[discipline,setDiscipline] = useState('Opening-ceremony')
  return (
    <AppContext.Provider value={{discipline,setDiscipline}}>
      <BrowserRouter>
        <Globalstyles/>
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/visualizations" element={<Visualization/>}/>
          <Route path='/highlights' element={<Highlights/>}/>
          <Route path="*" element={<Errorpage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
