import logo from './logo.svg';
import './App.css';
import Welcomepage from './components/welcome';
import Startpage from './components/start';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Game from './components/game';
import Winpage from './components/winpage';
import Losepage from './components/loss';

function App() {
 return(
  <>
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<Welcomepage/>}/>
    <Route path='/start' element={<Startpage/>}/>
    <Route path='/game' element={<Game/>}/>
    <Route path='/win' element={<Winpage/>}/>
    <Route path='/loss' element={<Losepage/>}/>
   </Routes>
   </BrowserRouter>
  </>
 )

}

export default App;
